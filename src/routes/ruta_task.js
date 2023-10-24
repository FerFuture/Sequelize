import { Router } from 'express';
import {obt, creacion, borrar, actu, obtid} from '../controllers/controlador_task.js';

const router = Router();

router.get('/task', obt);
router.post('/task', creacion);
router.put('/task/:id', actu);
router.delete('/task/:id', borrar);
router.get('/task/:id', obtid);




export default router;