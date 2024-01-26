"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salle = void 0;
const sequelize_1 = require("sequelize");
const sequelizeInstance_1 = __importDefault(require("../config/sequelizeInstance"));
class Salle extends sequelize_1.Model {
}
exports.Salle = Salle;
Salle.init({
    nom: sequelize_1.DataTypes.STRING,
    capacite: sequelize_1.DataTypes.INTEGER,
}, {
    sequelize: sequelizeInstance_1.default,
    tableName: 'salles'
});
