import { Router } from 'express';
import { getAllTarifs, getTarifById, createTarif, updateTarif, deleteTarif } from '../controllers/tarifController';

const router = Router();

router.get('/', getAllTarifs);
router.get('/:id', getTarifById);
router.post('/', createTarif);
router.put('/:id', updateTarif);
router.delete('/:id', deleteTarif);

export default router;
