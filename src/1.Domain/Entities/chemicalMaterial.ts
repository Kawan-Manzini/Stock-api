/* eslint-disable prettier/prettier */
import { Entity, Column } from 'typeorm';
import { Base } from './entity';

@Entity()
export class ChemicallMaterial extends Base {

    @Column()
    name: string;

    @Column({ type: 'int', default: 0 })
    StockQtt: number;

    @Column()
    supplier: string;

}
