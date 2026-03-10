import express from 'express';
import homeRouter from './routes/home.router.js';
import studentRouter from './routes/user.router.js';
import cursoRouter from './routes/courses.router.js';

import popularRouter from './routes/clase09.router.js';
import aggregateRouter from './routes/aggregations.router.js';



import { connectMongoDB } from './config/db/connect.config.js';

const app = express();
const PORT = 3000;
app.use(express.json());

/** 1) Routers */
app.use('/', homeRouter);

/** 1).2 Routers API */
app.use('/api/students', studentRouter);
app.use('/api/curso', cursoRouter);
app.use('/api/popular', popularRouter);
app.use('/api/aggregations', aggregateRouter);



/** 2) Seteo de Error 404 */
app.use((req, res) => {
    res.status(404).json({ title: '404 - Página no encontrada!' });
})


/** 3) Levantar el Servidor */
const startServer = async () => {
    await connectMongoDB('local');
    app.listen(PORT, () => console.log(`✅ Servidor escuchando en http://localhost:${PORT}`));
}

startServer();