import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/sequelizeInstance';

export class Tarif extends Model {
    public id!: number;
    public type!: string;
    public prix!: number;
}

Tarif.init(
    {
        type: DataTypes.STRING,
        prix: DataTypes.FLOAT,
    },
    {
        sequelize,
        tableName: 'tarifs',
    },
);
