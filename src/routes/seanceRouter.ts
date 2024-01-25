import { Router } from 'express';
import { getAllSeances, getSeanceById, createSeance, updateSeance, deleteSeance } from '../controllers/seanceController';

const router = Router();

router.get('/', getAllSeances);
router.get('/:id', getSeanceById);
router.post('/', createSeance);
router.put('/:id', updateSeance);
router.delete('/:id', deleteSeance);

export default router;
