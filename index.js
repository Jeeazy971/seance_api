"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerConfig_1 = __importDefault(require("./api/swaggerConfig"));
const sequelizeInstance_1 = __importDefault(require("./src/config/sequelizeInstance"));
// Configuration CORS
const corsOptions = process.env.NODE_ENV === 'production' ?
    { origin: "http://localhost:3000/" } :
    { origin: '*' };
sequelizeInstance_1.default.sync({ alter: true });
const body_parser_1 = __importDefault(require("body-parser"));
const salleRouter_1 = __importDefault(require("./src/routes/salleRouter"));
const seanceRouter_1 = __importDefault(require("./src/routes/seanceRouter"));
const tarifRouter_1 = __importDefault(require("./src/routes/tarifRouter"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)(corsOptions)); // Utilisation des options CORS
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerConfig_1.default));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/salles', salleRouter_1.default);
app.use('/seances', seanceRouter_1.default);
app.use('/tarifs', tarifRouter_1.default);
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});
app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
