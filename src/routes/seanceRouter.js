"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seanceController_1 = require("../controllers/seanceController");
const router = (0, express_1.Router)();
router.get('/', seanceController_1.getAllSeances);
router.get('/:id', seanceController_1.getSeanceById);
router.post('/', seanceController_1.createSeance);
router.put('/:id', seanceController_1.updateSeance);
router.delete('/:id', seanceController_1.deleteSeance);
exports.default = router;
