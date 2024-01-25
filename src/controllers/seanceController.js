"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSeance = exports.updateSeance = exports.getSeanceById = exports.getAllSeances = exports.createSeance = void 0;
const Seance_1 = require("../models/Seance");
const createSeance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seance = yield Seance_1.Seance.create(req.body);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
        res.status(201).json(seance);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.createSeance = createSeance;
const getAllSeances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seances = yield Seance_1.Seance.findAll();
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
        res.json(seances);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getAllSeances = getAllSeances;
const getSeanceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seance = yield Seance_1.Seance.findByPk(req.params.id);
        if (seance) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
            res.json(seance);
        }
        else {
            res.status(404).json({ error: 'Seance non trouvée' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getSeanceById = getSeanceById;
const updateSeance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seance = yield Seance_1.Seance.findByPk(req.params.id);
        if (seance) {
            yield seance.update(req.body);
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
            res.json(seance);
        }
        else {
            res.status(404).json({ error: 'Seance non trouvée' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateSeance = updateSeance;
const deleteSeance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const seance = yield Seance_1.Seance.findByPk(req.params.id);
        if (seance) {
            yield seance.destroy();
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: 'Seance non trouvée' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteSeance = deleteSeance;
