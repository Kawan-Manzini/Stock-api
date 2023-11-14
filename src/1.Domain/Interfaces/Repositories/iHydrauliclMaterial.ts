/* eslint-disable prettier/prettier */
import { IRepository } from "../iRepository";
import { HydraulicMaterial } from "src/1.Domain/Entities/hydraulicMaterial";

export interface IHydraulicMaterial extends IRepository<HydraulicMaterial>{ // SOLID-ISP  Interface Segregation Principle (ISP)
  
}