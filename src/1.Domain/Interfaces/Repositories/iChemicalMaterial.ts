/* eslint-disable prettier/prettier */
import { ChemicalMaterial } from "src/1.Domain/Entities/chemicalMaterial";
import { IRepository } from "../iRepository";

export interface IChemicalMaterial extends IRepository<ChemicalMaterial>{ // SOLID-ISP  Interface Segregation Principle (ISP)
  
}