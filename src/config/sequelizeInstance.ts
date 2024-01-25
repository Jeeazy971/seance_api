import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cinemaseance', 'root', 'root', {
  host: 'localhost',
//   dialect: 'postgres'
  dialect: 'mysql'
});

export default sequelize;
