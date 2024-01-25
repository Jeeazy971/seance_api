import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeInstance';

export class Seance extends Model {
  public id!: number;
  public dateHeure!: Date;
  public film!: number;
  public salleId!: number;

}

Seance.init({
  dateHeure: DataTypes.DATE,
  film: DataTypes.STRING,
  salleId: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'seances'
});
