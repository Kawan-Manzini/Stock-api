/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'HydraulicMaterialValidator', async: false })
export class HydraulicMaterialValidator implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        const { property, value: fieldValue } = args.constraints[0];

        switch (property) {
            case 'name':
                return this.validateString(fieldValue, 'Campo obrigatório');
            case 'StockQtt':
                return this.validateInt(fieldValue, 'Deve ser um número inteiro', 'Deve ser no mínimo 0');
            case 'supplier':
                return this.validateString(fieldValue, 'Campo obrigatório');
            default:
                return true;
        }
    }

    defaultMessage(args: ValidationArguments) {
        const { property } = args.constraints[0];

        switch (property) {
            case 'name':
                return 'Campo obrigatório';
            case 'StockQtt':
                return 'Deve ser um número inteiro e no mínimo 0';
            case 'supplier':
                return 'Campo obrigatório';
            default:
                return 'Campo inválido';
        }
    }

    private validateString(value: any, errorMessage: string): boolean {
        if (value === undefined || value === null || typeof value !== 'string' || value.trim() === '') {
            return false;
        }
        return true;
    }

    private validateInt(value: any, intErrorMessage: string, minErrorMessage: string): boolean {
        if (!Number.isInteger(value)) {
            return false;
        }

        if (value < 0) {
            return false;
        }

        return true;
    }
}
