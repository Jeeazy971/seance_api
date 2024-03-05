"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
// Déterminer l'environnement et charger le fichier .env correspondant
switch (process.env.NODE_ENV) {
    case 'test':
        dotenv.config({ path: '.env.test' });
        break;
    case 'production':
        dotenv.config({ path: '.env.production' });
        break;
    default:
        dotenv.config({ path: '.env.development' });
}
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
exports.default = app;
