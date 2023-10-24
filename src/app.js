import  express  from "express";
import rutas from './routes/rutas.js';
import ruta from './routes/ruta_task.js';


const app = express();
app.use(express.json());
app.use(rutas);
app.use(ruta);


export default app;