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
exports.deleteSalle = exports.updateSalle = exports.getSalleById = exports.getAllSalles = exports.createSalle = void 0;
const Salle_1 = require("../models/Salle");
const createSalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salle = yield Salle_1.Salle.create(req.body);
        res.status(201).json(salle);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.createSalle = createSalle;
const getAllSalles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salles = yield Salle_1.Salle.findAll();
        res.json(salles);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getAllSalles = getAllSalles;
const getSalleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salle = yield Salle_1.Salle.findByPk(req.params.id);
        if (salle) {
            res.json(salle);
        }
        else {
            res.status(404).json({ error: 'Salle non trouvée' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getSalleById = getSalleById;
const updateSalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salle = yield Salle_1.Salle.findByPk(req.params.id);
        if (salle) {
            yield salle.update(req.body);
            res.json(salle);
        }
        else {
            res.status(404).json({ error: 'Salle non trouvée' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateSalle = updateSalle;
const deleteSalle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salle = yield Salle_1.Salle.findByPk(req.params.id);
        if (salle) {
            yield salle.destroy();
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: 'Salle non trouvée' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteSalle = deleteSalle;
