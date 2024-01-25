import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeInstance'; 

export class Salle extends Model {
  public id!: number;
  public nom!: string;
  public capacite!: number;

}

Salle.init({
  nom: DataTypes.STRING,
  capacite: DataTypes.INTEGER,

}, {
  sequelize,
  tableName: 'salles'
});
