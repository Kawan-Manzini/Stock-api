/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity } from 'typeorm';

// abstract pois essa classe nao sera instanciada
export abstract class Base extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column({ default: false })
    excluded: boolean;

    delete() {
        this.excluded = true;
    }

    update() {
        this.updatedAt = new Date();
    }
}
