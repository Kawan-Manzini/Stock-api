/* eslint-disable prettier/prettier */
import { ChemicalMaterial } from './1.Domain/Entities/chemicalMaterial';
import { ElectricalMaterial } from './1.Domain/Entities/eletricalMaterial';
import { HydraulicMaterial } from './1.Domain/Entities/hydraulicMaterial';
import { ApplicationDbContext } from './2.Infra/Data/ApplicationDbContext';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChemicalMaterialController } from './4.Services/Controllers/ChemicalMaterial.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './public/stock_database.sqlite',
      entities: [HydraulicMaterial, ChemicalMaterial, ElectricalMaterial],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      HydraulicMaterial,
      ChemicalMaterial,
      ElectricalMaterial,
    ]),
  ],
  controllers: [ChemicalMaterialController],
  providers: [ApplicationDbContext],
  exports: [ApplicationDbContext],
})
export class AppModule {}
