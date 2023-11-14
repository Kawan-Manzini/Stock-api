/* eslint-disable prettier/prettier */
import { ChemicallMaterial } from "src/1.Domain/Entities/chemicalMaterial";
import { IRepository } from "../iRepository";

export interface IChemicalMaterial extends IRepository<ChemicallMaterial>{ // SOLID-ISP  Interface Segregation Principle (ISP)
  
}