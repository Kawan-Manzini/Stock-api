/* eslint-disable prettier/prettier */
import { IRepository } from "../iRepository";
import { HydauliclMaterial } from "src/1.Domain/Entities/hydraulicMaterial";

export interface IHydraulicMaterial extends IRepository<HydauliclMaterial>{ // SOLID-ISP  Interface Segregation Principle (ISP)
  
}