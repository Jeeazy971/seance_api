import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeInstance';

export class Seance extends Model {
  public id!: number;
  public dateHeure!: Date;
  public filmId!: number;
  public salleId!: number;

}

Seance.init({
  dateHeure: DataTypes.DATE,
  film: DataTypes.INTEGER,
  salleId: DataTypes.INTEGER,
}, {
  sequelize,
  tableName: 'seances'
});
