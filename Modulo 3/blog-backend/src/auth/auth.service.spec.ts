// src/auth/auth.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

// Mockeamos bcrypt de forma segura para evitar el error al intentar hacer espionajes (spyOn)
jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn().mockResolvedValue(true),
}));

describe('AuthService', () => {
  let service: AuthService;

  const mockUsersService = {
    findByUsername: jest.fn(),
    create:         jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    
    // Reiniciamos los mocks de bcrypt a su comportamiento por defecto
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: mockUsersService },
        { provide: JwtService,   useValue: mockJwtService   },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login()', () => {
    it('should return null when user does not exist', async () => {
      mockUsersService.findByUsername.mockResolvedValue(null);
      expect(await service.login({ username: 'x', password: 'y' })).toBeNull();
    });

    it('should return null when password is incorrect', async () => {
      mockUsersService.findByUsername.mockResolvedValue({ id: '1', password: 'hash' });
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);
      expect(await service.login({ username: 'x', password: 'wrong' })).toBeNull();
    });

    it('should return a JWT token on successful login', async () => {
      mockUsersService.findByUsername.mockResolvedValue({ id: '1', username: 'admin', password: 'hash' });
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('my.jwt.token');
      const result = await service.login({ username: 'admin', password: 'correcta' });
      expect(result).toBe('my.jwt.token');
    });

    it('should call jwtService.sign with correct payload', async () => {
      const user = { id: '42', username: 'maria', password: 'hash' };
      mockUsersService.findByUsername.mockResolvedValue(user);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('token');
      await service.login({ username: 'maria', password: 'pass' });
      expect(mockJwtService.sign).toHaveBeenCalledWith({ id: '42', username: 'maria' });
    });

    it('should return null on unexpected error', async () => {
      mockUsersService.findByUsername.mockRejectedValue(new Error('DB error'));
      expect(await service.login({ username: 'x', password: 'y' })).toBeNull();
    });
  });

  describe('register()', () => {
    it('should return null when user creation fails', async () => {
      mockUsersService.create.mockResolvedValue(null);
      expect(await service.register({ username: 'x', password: 'y', email: 'z@z.com' })).toBeNull();
    });

    it('should return a JWT token on successful registration', async () => {
      mockUsersService.create.mockResolvedValue({ id: '1', username: 'nuevo' });
      mockJwtService.sign.mockReturnValue('reg.token');
      expect(await service.register({ username: 'nuevo', password: 'p', email: 'e@e.com' })).toBe('reg.token');
    });

    it('should not call jwtService.sign when user creation fails', async () => {
      mockUsersService.create.mockResolvedValue(null);
      await service.register({ username: 'x', password: 'y', email: 'z@z.com' });
      expect(mockJwtService.sign).not.toHaveBeenCalled();
    });
  });

});