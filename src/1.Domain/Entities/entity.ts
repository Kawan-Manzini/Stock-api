/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column, BaseEntity } from 'typeorm';

export abstract class Base extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', default: () => '1970-01-01 00:00:00' })
    deletedAt: Date;

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
