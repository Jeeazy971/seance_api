"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelizeInstance_1 = __importDefault(require("./src/config/sequelizeInstance"));
sequelizeInstance_1.default.sync({ alter: true });
const body_parser_1 = __importDefault(require("body-parser"));
const salleRouter_1 = __importDefault(require("./src/routes/salleRouter"));
const seanceRouter_1 = __importDefault(require("./src/routes/seanceRouter"));
const tarifRouter_1 = __importDefault(require("./src/routes/tarifRouter"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/salles', salleRouter_1.default);
app.use('/seances', seanceRouter_1.default);
app.use('/tarifs', tarifRouter_1.default);
app.get('/', (req, res) => {
    res.send('Bienvenue sur l\'API de gestion des séances de cinéma!');
});
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
