"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarif = void 0;
const sequelize_1 = require("sequelize");
const sequelizeInstance_1 = __importDefault(require("../config/sequelizeInstance"));
class Tarif extends sequelize_1.Model {
}
exports.Tarif = Tarif;
Tarif.init({
    type: sequelize_1.DataTypes.STRING,
    prix: sequelize_1.DataTypes.FLOAT,
}, {
    sequelize: sequelizeInstance_1.default,
    tableName: 'tarifs'
});
