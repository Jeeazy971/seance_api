"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salleController_1 = require("../controllers/salleController");
const router = (0, express_1.Router)();
router.get('/', salleController_1.getAllSalles);
router.get('/:id', salleController_1.getSalleById);
router.post('/', salleController_1.createSalle);
router.put('/:id', salleController_1.updateSalle);
router.delete('/:id', salleController_1.deleteSalle);
exports.default = router;