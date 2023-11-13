/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityRepository, Repository } from 'typeorm';

export interface IRepository<T> {
  add(entity: T, commit?: boolean): Promise<boolean>;
  upsert(entity: T, exp: (entity: T) => boolean, commit?: boolean): Promise<boolean>;
  save(entity: T, commit?: boolean): Promise<boolean>;
  update(entity: T, commit?: boolean): Promise<boolean>;
  forceDelete(id: string, commit?: boolean): Promise<boolean>;
  softDelete(entity: T): Promise<boolean>;
  getById(id: string): Promise<T | undefined>;
  getAll(): Promise<T[]>;
  getAllBy(exp: (entity: T) => boolean): Promise<T[]>;
  getBy(exp: (entity: T) => boolean): Promise<T | undefined>;
  any(exp: (entity: T) => boolean): Promise<boolean>;
  none(exp: (entity: T) => boolean): Promise<boolean>;
  saveChanges(): Promise<number>;
}

type NewType<T> = (entity: T) => boolean;


