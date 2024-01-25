import { Sequelize } from 'sequelize';

const database = process.env.DB_NAME || 'cinemaseance';
const username = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || 'root';
const host = process.env.DB_HOST || 'localhost';
const dialect = process.env.DB_DIALECT as 'mysql' | 'postgres' || 'mysql';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
});

export default sequelize;

