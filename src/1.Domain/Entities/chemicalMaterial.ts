/* eslint-disable prettier/prettier */
import { Entity, Column } from 'typeorm';
import { ChemicallMaterialValidator } from '../Validators/ChemicallMaterialValidator ';
import { Validate } from 'class-validator';
import { Base } from './entity';

@Entity("chemical_material")
export class ChemicalMaterial extends Base {


    @Column()
    @Validate(ChemicallMaterialValidator)
    name: string;

    @Column({ type: 'int', default: 0 })
    @Validate(ChemicallMaterialValidator)
    StockQtt: number;

    @Column()
    @Validate(ChemicallMaterialValidator)
    supplier: string;
}