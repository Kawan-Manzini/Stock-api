/* eslint-disable prettier/prettier */
import { ChemicalMaterialViewModel } from '../ViewModels/ChemicalMaterialViewModel';

import { ValidationError } from 'class-validator';


interface IChemicalMaterialAppService {
  getAll(): Promise<ChemicalMaterialViewModel[]>;
  getById(id: string): Promise<ChemicalMaterialViewModel | null>;
  getAllBy(exp: (viewModel: ChemicalMaterialViewModel) => boolean): Promise<ChemicalMaterialViewModel[]>;
  getByProvider(supplier: string): Promise<ChemicalMaterialViewModel[] | null>;
  add(vm: ChemicalMaterialViewModel): Promise<ValidationError>;
  update(vm: ChemicalMaterialViewModel): Promise<ValidationError>;
  remove(id: string): Promise<ValidationError>;
}

export default IChemicalMaterialAppService;
