const express = require('express');
const app = express();
const PORT = 5000;

// Ruta de prueba
app.get('/' , (req, res) => {
    res.send("Estoy escuchando tu solicitud.!!!")
})

app.get('/info', (req, res) => {
    res.json({
        message: "Estoy escuchando tu solicitud en la ruta /info !!"
    });
})

// Iniciar nuestro Servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en: http://localhost:${PORT}`);
})