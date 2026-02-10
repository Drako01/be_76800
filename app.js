import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { createServer } from 'http';
import { fileURLToPath } from 'url';

import homeRouter from './routes/home.router.js';
import uploadRouter from './routes/upload.router.js';
import { Server } from 'socket.io';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const PORT = 3000;
const io = new Server(httpServer);

/** 1) Motor de Plantillas */
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

/** 2) Carpeta de Archivos static */
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/sweetalert2', express.static(path.join(__dirname, 'node_modules/sweetalert2/dist')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/** 3) Routers */
app.use('/', homeRouter);
app.use('/upload', uploadRouter);


/** 4) Seteo de Error 404 */
app.use((req, res) => {
    res.status(404).render('404', {title: '404 - Página no encontrada!'});
})

/** 5) Creacion del websocket */
io.on('connection', (socket) => {
    console.log(`🟢 Nuevo usuario conectado.!`);

    socket.on('chat:message', (data) => {
        io.emit('chat:message', data);
    });

    socket.on('disconnect', () => {
        console.log('🔴 Usuario desconectado.!');
    })
});

httpServer.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
