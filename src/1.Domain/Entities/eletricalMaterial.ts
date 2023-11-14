/* eslint-disable prettier/prettier */
import { Entity, Column } from 'typeorm';
import { EletricalMaterialValidator } from '../Validators/EletricalMaterialValidator ';


import { Base } from './entity';
import { Validate } from 'class-validator';

@Entity("eletrical_materials")
export class ElectricalMaterial extends Base {

    @Column()
    @Validate(EletricalMaterialValidator)
    name: string;

    @Column({ type: 'int', default: 0 })
    @Validate(EletricalMaterialValidator)
    StockQtt: number;

    @Column()
    @Validate(EletricalMaterialValidator)
    supplier: string;
}
