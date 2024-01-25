"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = process.env.DB_NAME || 'cinemaseance';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || 'root';
const host = process.env.DB_HOST || 'localhost';
const dialect = process.env.DB_DIALECT || 'mysql';
const sequelize = new sequelize_1.Sequelize(database, username, password, {
    host: host,
    dialect: dialect
});
exports.default = sequelize;
