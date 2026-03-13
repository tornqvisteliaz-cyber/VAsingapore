import { Router } from 'express';
import { addPilot, deletePilot, listPilots, updatePilot } from '../controllers/pilotController.js';
import { requireAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.get('/', listPilots);
router.post('/', requireAdmin, addPilot);
router.patch('/:id', requireAdmin, updatePilot);
router.delete('/:id', requireAdmin, deletePilot);

export default router;
