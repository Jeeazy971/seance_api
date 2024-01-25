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
exports.deleteTarif = exports.updateTarif = exports.getTarifById = exports.getAllTarifs = exports.createTarif = void 0;
const Tarif_1 = require("../models/Tarif");
const createTarif = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarif = yield Tarif_1.Tarif.create(req.body);
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
        res.status(201).json(tarif);
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.createTarif = createTarif;
const getAllTarifs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarifs = yield Tarif_1.Tarif.findAll();
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
        res.json(tarifs);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getAllTarifs = getAllTarifs;
const getTarifById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarif = yield Tarif_1.Tarif.findByPk(req.params.id);
        if (tarif) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
            res.json(tarif);
        }
        else {
            res.status(404).json({ error: 'Tarif non trouvé' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getTarifById = getTarifById;
const updateTarif = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarif = yield Tarif_1.Tarif.findByPk(req.params.id);
        if (tarif) {
            yield tarif.update(req.body);
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
            res.json(tarif);
        }
        else {
            res.status(404).json({ error: 'Tarif non trouvé' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.updateTarif = updateTarif;
const deleteTarif = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tarif = yield Tarif_1.Tarif.findByPk(req.params.id);
        if (tarif) {
            yield tarif.destroy();
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000/');
            res.status(204).send();
        }
        else {
            res.status(404).json({ error: 'Tarif non trouvé' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.deleteTarif = deleteTarif;
