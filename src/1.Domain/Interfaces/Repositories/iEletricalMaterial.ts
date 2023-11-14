/* eslint-disable prettier/prettier */
import { IRepository } from "../iRepository";
import { ElectricalMaterial } from "src/1.Domain/Entities/eletricalMaterial";

export interface IElectricalMaterial extends IRepository<ElectricalMaterial>{ // SOLID-ISP  Interface Segregation Principle (ISP)
  
}