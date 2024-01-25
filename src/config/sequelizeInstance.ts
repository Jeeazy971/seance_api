import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('cinemaseance', 'root', 'TUPvqBxLCMHrB21QryECugKnEVyPna3G', {
  host: 'dpg-cmp1l30l5elc73fltl40-a',
//   dialect: 'postgres'
  dialect: 'mysql'
});

export default sequelize;
