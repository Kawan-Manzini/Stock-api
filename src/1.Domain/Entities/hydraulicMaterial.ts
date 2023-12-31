/* eslint-disable prettier/prettier */
import { Entity, Column } from 'typeorm';
import { Base } from './entity';
import { Validate } from 'class-validator';
import { HydraulicMaterialValidator } from '../Validators/HydraulicMaterialValidator ';

@Entity("hydraulic_materials")
export class HydraulicMaterial extends Base {

    @Column()
    @Validate(HydraulicMaterialValidator)
    name: string;

    @Column({ type: 'int', default: 0 })
    @Validate(HydraulicMaterialValidator)
    StockQtt: number;

    @Column()
    @Validate(HydraulicMaterialValidator)
    supplier: string;
}
