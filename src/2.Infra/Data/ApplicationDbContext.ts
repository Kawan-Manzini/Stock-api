/* eslint-disable prettier/prettier */
import { ChemicalMaterial } from 'src/1.Domain/Entities/chemicalMaterial';
import { ElectricalMaterial } from 'src/1.Domain/Entities/eletricalMaterial';
import { HydraulicMaterial } from 'src/1.Domain/Entities/hydraulicMaterial';
import { createConnection, Connection, getConnectionManager } from 'typeorm';

export class ApplicationDbContext {
    private static connection: Connection;

    static async getConnection(): Promise<Connection> {
        if (getConnectionManager().has('default')) {
            await getConnectionManager().get('default').close();
        }

        if (!this.connection) {
          this.connection = await createConnection({
              type: 'sqlite',
              database: './public/stock-database.sqlite', 
              entities: [HydraulicMaterial, ChemicalMaterial, ElectricalMaterial],
              synchronize: true,
              logging: true,
          });
      }

        return this.connection;
    }
}
