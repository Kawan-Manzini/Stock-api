/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BaseEntity } from 'typeorm';

// abstract pois essa classe nao sera instanciada
export abstract class Base extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    deletedAt: Date | null;

    @Column({ default: false })
    excluded: boolean;

    delete() {
        this.excluded = true;
        this.deletedAt = new Date();
    }

    update() {
        this.updatedAt = new Date();
    }
}
