"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importation des modules 
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./api/swaggerConfig"));
const sequelizeInstance_1 = __importDefault(require("./src/config/sequelizeInstance"));
// Synchronisation de Sequelize avec la base de données
sequelizeInstance_1.default.sync({ alter: true });
// Importation de bodyParser pour analyser les corps des requêtes
const body_parser_1 = __importDefault(require("body-parser"));
// Importation des routers
const salleRouter_1 = __importDefault(require("./src/routes/salleRouter"));
const seanceRouter_1 = __importDefault(require("./src/routes/seanceRouter"));
const tarifRouter_1 = __importDefault(require("./src/routes/tarifRouter"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Utilisation de CORS pour gérer les requêtes cross-origin
app.use((0, cors_1.default)());
// Configuration de Swagger UI pour la documentation de l'API
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
// Configuration de bodyParser pour analyser le JSON et les données de formulaire
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Configuration des routes pour les salles, séances, et tarifs
app.use('/salles', salleRouter_1.default);
app.use('/seances', seanceRouter_1.default);
app.use('/tarifs', tarifRouter_1.default);
// Route racine redirigeant vers la documentation Swagger
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});
// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
