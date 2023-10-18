import { Router } from 'express';
import {obteners, crear} from '../controllers/controlador.js';

const router = Router();

router.get('/projects', obteners);
router.post('/projects', crear);
router.put('/projects:id');
router.delete('/projects:id');
router.get('/projects:id');




export default router;