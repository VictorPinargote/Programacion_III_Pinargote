// src/users/users.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

// Mockeamos bcrypt de forma segura para evitar el error de redefine property
jest.mock('bcrypt', () => ({
  hash: jest.fn().mockResolvedValue('hashed_password'),
  compare: jest.fn(),
}));

describe('UsersService', () => {
  let service: UsersService;

  const mockUserRepository = {
    create:               jest.fn(),
    save:                 jest.fn(),
    findOne:              jest.fn(),
    remove:               jest.fn(),
    createQueryBuilder:   jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    
    // Limpiamos las llamadas simuladas de bcrypt en cada test
    jest.clearAllMocks();
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashed_password');

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useValue: mockUserRepository },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => { expect(service).toBeDefined(); });

  describe('create()', () => {
    it('should hash the password before saving', async () => {
      mockUserRepository.create.mockReturnValue({ password: 'hashed_password' });
      mockUserRepository.save.mockResolvedValue({ id: '1', password: 'hashed_password' });
      const result = await service.create({ username: 'a', email: 'a@a.com', password: 'plain' });
      expect(result?.password).toBe('hashed_password');
    });

    it('should call bcrypt.hash with salt 10', async () => {
      mockUserRepository.create.mockReturnValue({});
      mockUserRepository.save.mockResolvedValue({});
      await service.create({ username: 'a', email: 'a@a.com', password: 'mipass' });
      expect(bcrypt.hash).toHaveBeenCalledWith('mipass', 10);
    });

    it('should return null when repository throws', async () => {
      mockUserRepository.create.mockReturnValue({});
      mockUserRepository.save.mockRejectedValue(new Error('Duplicate'));
      expect(await service.create({ username: 'x', email: 'x@x.com', password: 'p' })).toBeNull();
    });
  });

  describe('findOne()', () => {
    it('should return user when it exists', async () => {
      const mockUser = { id: '1', username: 'ana' };
      mockUserRepository.findOne.mockResolvedValue(mockUser);
      expect(await service.findOne('1')).toEqual(mockUser);
    });
    it('should return null when user does not exist', async () => {
      mockUserRepository.findOne.mockResolvedValue(null);
      expect(await service.findOne('x')).toBeNull();
    });
    it('should return null when repository throws', async () => {
      mockUserRepository.findOne.mockRejectedValue(new Error());
      expect(await service.findOne('1')).toBeNull();
    });
  });

  describe('findByEmail()', () => {
    it('should return user by email', async () => {
      mockUserRepository.findOne.mockResolvedValue({ id: '1', email: 'a@a.com' });
      const result = await service.findByEmail('a@a.com');
      expect(mockUserRepository.findOne).toHaveBeenCalledWith({ where: { email: 'a@a.com' } });
      expect(result).toBeDefined();
    });
    it('should return null when email not found', async () => {
      mockUserRepository.findOne.mockResolvedValue(null);
      expect(await service.findByEmail('x@x.com')).toBeNull();
    });
  });

  describe('findByUsername()', () => {
    it('should return user by username', async () => {
      mockUserRepository.findOne.mockResolvedValue({ id: '1', username: 'ana' });
      const result = await service.findByUsername('ana');
      expect(mockUserRepository.findOne).toHaveBeenCalledWith({ where: { username: 'ana' } });
      expect(result).toBeDefined();
    });
    it('should return null when username not found', async () => {
      mockUserRepository.findOne.mockResolvedValue(null);
      expect(await service.findByUsername('fantasma')).toBeNull();
    });
  });

  describe('update()', () => {
    it('should return null when user does not exist', async () => {
      mockUserRepository.findOne.mockResolvedValue(null);
      expect(await service.update('x', { username: 'nuevo' })).toBeNull();
    });
    
    it('should not hash when password is not provided', async () => {
      mockUserRepository.findOne.mockResolvedValue({ id: '1' });
      mockUserRepository.save.mockResolvedValue({ id: '1', username: 'nuevo' });
      await service.update('1', { username: 'nuevo' });
      expect(bcrypt.hash).not.toHaveBeenCalled();
    });
    
    it('should hash new password when provided', async () => {
      mockUserRepository.findOne.mockResolvedValue({ id: '1', password: 'viejo' });
      // Podemos redefinir el valor de retorno en este test individual si es necesario
      (bcrypt.hash as jest.Mock).mockResolvedValue('nuevo_hash');
      mockUserRepository.save.mockResolvedValue({ id: '1', password: 'nuevo_hash' });
      const result = await service.update('1', { password: 'nueva' });
      expect(bcrypt.hash).toHaveBeenCalledWith('nueva', 10);
      expect(result?.password).toBe('nuevo_hash');
    });
  });

  describe('remove()', () => {
    it('should return null when user does not exist', async () => {
      mockUserRepository.findOne.mockResolvedValue(null);
      expect(await service.remove('x')).toBeNull();
    });
    it('should call repository.remove with the found user', async () => {
      const mockUser = { id: '1' };
      mockUserRepository.findOne.mockResolvedValue(mockUser);
      mockUserRepository.remove.mockResolvedValue(mockUser);
      await service.remove('1');
      expect(mockUserRepository.remove).toHaveBeenCalledWith(mockUser);
    });
  });

  describe('updateProfile()', () => {
    it('should throw NotFoundException when user does not exist', async () => {
      mockUserRepository.findOne.mockResolvedValue(null);
      await expect(service.updateProfile('x', 'foto.jpg')).rejects.toThrow(NotFoundException);
    });
    it('should update profile path and return user', async () => {
      const mockUser = { id: '1', profile: null };
      mockUserRepository.findOne.mockResolvedValue(mockUser);
      mockUserRepository.save.mockResolvedValue({ ...mockUser, profile: 'foto.jpg' });
      const result = await service.updateProfile('1', 'foto.jpg');
      expect(mockUserRepository.save).toHaveBeenCalledWith(
        expect.objectContaining({ profile: 'foto.jpg' })
      );
      expect(result).toHaveProperty('profile', 'foto.jpg');
    });
  });

});