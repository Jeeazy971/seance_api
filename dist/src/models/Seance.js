"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seance = void 0;
const sequelize_1 = require("sequelize");
const sequelizeInstance_1 = __importDefault(require("../config/sequelizeInstance"));
class Seance extends sequelize_1.Model {
}
exports.Seance = Seance;
Seance.init({
    dateHeure: sequelize_1.DataTypes.DATE,
    filmId: sequelize_1.DataTypes.INTEGER,
    salleId: sequelize_1.DataTypes.INTEGER,
}, {
    sequelize: sequelizeInstance_1.default,
    tableName: 'seances'
});
