import { Router } from 'express';
import {obteners, crear, eliminar, actualizarProyecto, obtenerId, obtenerIdtask} from '../controllers/controlador.js';

const router = Router();

router.get('/projects', obteners);
router.post('/projects', crear);
router.put('/projects/:id', actualizarProyecto);
router.delete('/projects/:id', eliminar);
router.get('/projects/:id', obtenerId);
router.get('/projects/:id/task', obtenerIdtask);



export default router;