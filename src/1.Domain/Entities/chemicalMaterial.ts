/* eslint-disable prettier/prettier */
import { Entity, Column, BaseEntity } from 'typeorm';
import { ChemicallMaterialValidator } from '../Validators/ChemicallMaterialValidator ';
import { Validate } from 'class-validator';

@Entity()
export class ChemicalMaterial extends BaseEntity {


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