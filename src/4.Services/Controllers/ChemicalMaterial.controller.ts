/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { ChemicalMaterialService } from 'src/3.Application/Services/ChemicalMaterial.service';
import { ChemicalMaterialViewModel } from 'src/3.Application/ViewModels/ChemicalMaterialViewModel';

@Controller('chemical-materials')
export class ChemicalMaterialController {
  constructor(private readonly chemicalMaterialService: ChemicalMaterialService) {}

  @Get()
  async getAll(): Promise<ChemicalMaterialViewModel[]> {
    return await this.chemicalMaterialService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ChemicalMaterialViewModel | null> {
    return await this.chemicalMaterialService.getById(id);
  }

  @Post('create')
  async add(@Body() vm: ChemicalMaterialViewModel): Promise<ValidationError | null> {
    return await this.chemicalMaterialService.add(vm);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() vm: ChemicalMaterialViewModel): Promise<ValidationError | null> {
    return await this.chemicalMaterialService.update({ id, ...vm });
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<ValidationError | null> {
    return await this.chemicalMaterialService.remove(id);
  }
}
