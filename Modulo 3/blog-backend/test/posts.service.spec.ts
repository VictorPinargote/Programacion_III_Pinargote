    // src/posts/posts.service.spec.ts

    import { Test, TestingModule } from '@nestjs/testing';
    import { getRepositoryToken } from '@nestjs/typeorm';
    import { PostsService } from './posts.service';
    import { Post } from './post.entity';
    import { Category } from '../categories/category.entity';

    describe('PostsService', () => {
    let service: PostsService;

    const mockPostsRepository = {
        create:  jest.fn(),
        save:    jest.fn(),
        findOne: jest.fn(),
        delete:  jest.fn(),
    };

    const mockCategoriesRepository = {
        findOne: jest.fn(),
    };

    beforeEach(async () => {
        jest.clearAllMocks();

        const module: TestingModule = await Test.createTestingModule({
        providers: [
            PostsService,
            { provide: getRepositoryToken(Post),     useValue: mockPostsRepository },
            { provide: getRepositoryToken(Category), useValue: mockCategoriesRepository },
        ],
        }).compile();

        service = module.get<PostsService>(PostsService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create()', () => {
        it('should return null when category does not exist', async () => {
        mockCategoriesRepository.findOne.mockResolvedValue(null);
        const dto = { title: 'Post', content: 'Contenido', categoryId: '99' };
        const result = await service.create(dto);
        expect(result).toBeNull();
        });

        it('should create and return a post when category exists', async () => {
        const mockCategory = { id: '1', name: 'Tech' };
        const mockPost     = { id: 'abc', title: 'Post', content: 'Texto', category: mockCategory };
        mockCategoriesRepository.findOne.mockResolvedValue(mockCategory);
        mockPostsRepository.create.mockReturnValue(mockPost);
        mockPostsRepository.save.mockResolvedValue(mockPost);

        const result = await service.create({ title: 'Post', content: 'Texto', categoryId: '1' });
        expect(result).toEqual(mockPost);
        });

        it('should return null when repository throws', async () => {
        mockCategoriesRepository.findOne.mockRejectedValue(new Error('DB error'));
        const result = await service.create({ title: 'x', content: 'y', categoryId: '1' });
        expect(result).toBeNull();
        });
    });

    describe('findOne()', () => {
        it('should return a post when it exists', async () => {
        const mockPost = { id: '1', title: 'Test' };
        mockPostsRepository.findOne.mockResolvedValue(mockPost);
        const result = await service.findOne('1');
        expect(result).toEqual(mockPost);
        });

        it('should return null when post does not exist', async () => {
        mockPostsRepository.findOne.mockResolvedValue(null);
        const result = await service.findOne('no-existe');
        expect(result).toBeNull();
        });
    });

    describe('remove()', () => {
        it('should return true when post is deleted', async () => {
        mockPostsRepository.delete.mockResolvedValue({ affected: 1 });
        expect(await service.remove('1')).toBe(true);
        });

        it('should return false when post does not exist', async () => {
        mockPostsRepository.delete.mockResolvedValue({ affected: 0 });
        expect(await service.remove('no-existe')).toBe(false);
        });

        it('should return false when repository throws', async () => {
        mockPostsRepository.delete.mockRejectedValue(new Error('error'));
        expect(await service.remove('1')).toBe(false);
        });
    });

    });