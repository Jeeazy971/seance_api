import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './api/swaggerConfig';
import sequelize from './src/config/sequelizeInstance';

sequelize.sync({ alter: true });

import bodyParser from 'body-parser';
import salleRouter from './src/routes/salleRouter';
import seanceRouter from './src/routes/seanceRouter';
import tarifRouter from './src/routes/tarifRouter';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/salles', salleRouter);
app.use('/seances', seanceRouter);
app.use('/tarifs', tarifRouter);


app.get('/', (req: Request, res: Response) => {
  res.redirect('/api-docs');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
