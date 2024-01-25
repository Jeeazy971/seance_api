"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('cinemaseance', 'root', 'TUPvqBxLCMHrB21QryECugKnEVyPna3G', {
    host: 'dpg-cmp1l30l5elc73fltl40-a',
    dialect: 'postgres'
    // dialect: 'mysql'
});
exports.default = sequelize;
