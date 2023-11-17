/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ChemicalMaterial } from 'src/1.Domain/Entities/chemicalMaterial';
import { ChemicalMaterialService } from 'src/3.Application/Services/ChemicalMaterial.service';

describe('ChemicalMaterialService', () => {
  let service: ChemicalMaterialService;
  let mockRepository: Record<string, jest.Mock>;

  beforeEach(async () => {
    mockRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      remove: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChemicalMaterialService,
        {
          provide: getRepositoryToken(ChemicalMaterial),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ChemicalMaterialService>(ChemicalMaterialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of ChemicalMaterialViewModels', async () => {
      const mockChemicalMaterials: ChemicalMaterial[] = [
        // Mock your ChemicalMaterial entities here
      ];

      mockRepository.find.mockReturnValueOnce(mockChemicalMaterials);

      const result = await service.getAll();

      expect(result).toEqual(mockChemicalMaterials.map(service.mapToViewModel));
      expect(mockRepository.find).toHaveBeenCalled();
    });
  });

  describe('getById', () => {
    it('should return a ChemicalMaterialViewModel', async () => {
      const mockChemicalMaterial: ChemicalMaterial = createMockChemicalMaterial();
      mockRepository.findOne.mockReturnValueOnce(mockChemicalMaterial);

      const result = await service.getById('someId');

      expect(result).toEqual(service.mapToViewModel(mockChemicalMaterial));
      expect(mockRepository.findOne).toHaveBeenCalledWith({ where: { id: 'someId' } });
    });

    it('should return null if ChemicalMaterial is not found', async () => {
      mockRepository.findOne.mockReturnValueOnce(undefined);

      const result = await service.getById('nonExistentId');

      expect(result).toBeNull();
      expect(mockRepository.findOne).toHaveBeenCalledWith({ where: { id: 'nonExistentId' } });
    });
  });

  // Add similar tests for other methods

  function createMockChemicalMaterial(): ChemicalMaterial {
    // Create a generic mock here
    return {
      name: 'Mocked Material',
      StockQtt: 10,
      supplier: 'Mocked Supplier',
      id: '345d8bd6-3976-4777-9088-5ed63b75f63b',
      createdAt: undefined,
      updatedAt: undefined,
      excluded: false,
      delete: jest.fn(),
      update: jest.fn(),
      hasId: jest.fn(),
      save: jest.fn(),
      remove: jest.fn(),
      softRemove: jest.fn(),
      recover: jest.fn(),
      reload: jest.fn(),
    };
  }
});
