import express from 'express';
import homeRouter from './routes/home.router.js';
import userRouter from './routes/user.router.js';
import cursoRouter from './routes/courses.router.js';


import { connectMongoDB } from './config/db/connect.config.js';

const app = express();
const PORT = 3000;
app.use(express.json());

/** 1) Routers */
app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/curso', cursoRouter);


/** 2) Seteo de Error 404 */
app.use((req, res) => {
    res.status(404).json({ title: '404 - Página no encontrada!' });
})


/** 3) Levantar el Servidor */
const startServer = async () => {
    await connectMongoDB('atlas');
    app.listen(PORT, () => console.log(`✅ Servidor escuchando en http://localhost:${PORT}`));
}

startServer();