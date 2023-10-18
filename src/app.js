import  express  from "express";
import rutas from './routes/rutas.js';



const app = express();
app.use(express.json());
app.use(rutas);


export default app;