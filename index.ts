// Importation des modules 
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './api/swaggerConfig';
import sequelize from './src/config/sequelizeInstance';

// Synchronisation de Sequelize avec la base de données
sequelize.sync({ alter: true });

// Importation de bodyParser pour analyser les corps des requêtes
import bodyParser from 'body-parser';

// Importation des routers
import salleRouter from './src/routes/salleRouter';
import seanceRouter from './src/routes/seanceRouter';
import tarifRouter from './src/routes/tarifRouter';


const app: Express = express();

const port = process.env.PORT || 3000;

// Utilisation de CORS pour gérer les requêtes cross-origin
app.use(cors()); 

// Configuration de Swagger UI pour la documentation de l'API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Configuration de bodyParser pour analyser le JSON et les données de formulaire
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration des routes pour les salles, séances, et tarifs
app.use('/salles', salleRouter);
app.use('/seances', seanceRouter);
app.use('/tarifs', tarifRouter);

// Route racine redirigeant vers la documentation Swagger
app.get('/', (req: Request, res: Response) => {
  res.redirect('/api-docs');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
