/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ValidationError } from "class-validator";
import IChemicalMaterialAppService from "../Interfaces/IChemicalMaterialAppService";
import { ChemicalMaterial } from "src/1.Domain/Entities/chemicalMaterial";
import { ChemicalMaterialViewModel } from "../ViewModels/ChemicalMaterialViewModel";

@Injectable()
export class ChemicalMaterialService implements IChemicalMaterialAppService {
  constructor(
    @InjectRepository(ChemicalMaterial)
    private readonly chemicalMaterialRepository: Repository<ChemicalMaterial>,
  ) {}

  async getAll(): Promise<ChemicalMaterialViewModel[]> {
    try {
      const chemicalMaterials = await this.chemicalMaterialRepository.find();
      return chemicalMaterials.map(this.mapToViewModel);
    } catch (error) {
      return []; 
    }
  }

  async getById(id: string): Promise<ChemicalMaterialViewModel | null> {
    try {
      const chemicalMaterial = await this.chemicalMaterialRepository.findOne({where: {id : id}});
      return chemicalMaterial ? this.mapToViewModel(chemicalMaterial) : null;
    } catch (error) {
      return null;
    }
  }

  async getAllBy(exp: (viewModel: ChemicalMaterialViewModel) => boolean): Promise<ChemicalMaterialViewModel[]> {
    try {
      const chemicalMaterials = await this.chemicalMaterialRepository.find();
      return chemicalMaterials.map(this.mapToViewModel).filter(exp);
    } catch (error) {
      return [];
    }
  }

  async add(vm: ChemicalMaterialViewModel): Promise<ValidationError | null> {
    try {
      const chemicalMaterial = this.chemicalMaterialRepository.create(vm);
      await this.chemicalMaterialRepository.save(chemicalMaterial);
      return null;
    } catch (error) {
      return error;
    }
  }

  async update(vm: ChemicalMaterialViewModel): Promise<ValidationError | null> {
    try {
      const existingChemicalMaterial = await this.chemicalMaterialRepository.findOne({ where: { id: vm.id } });

      if (!existingChemicalMaterial) {
        throw new NotFoundException("Chemical material not found");
      }

      this.chemicalMaterialRepository.merge(existingChemicalMaterial, vm);
      await this.chemicalMaterialRepository.save(existingChemicalMaterial);

      return null;
    } catch (error) {
      return error;
    }
  }

  async remove(id: string): Promise<ValidationError | null> {
    try {
      const existingChemicalMaterial = await this.chemicalMaterialRepository.findOne({ where: { id } });

      if (!existingChemicalMaterial) {
        throw new NotFoundException("Chemical material not found");
      }

      await this.chemicalMaterialRepository.remove(existingChemicalMaterial);
      return null;
    } catch (error) {
      return error;
    }
  }

  private mapToViewModel(entity: ChemicalMaterial): ChemicalMaterialViewModel {
    return {
      id: entity.id,
      name: entity.name,
      supplier: entity.supplier,
      stockQtt: entity.StockQtt
    };
  }
}
