const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('Servidor Nativo HTTP Funcionando!!');
    } else if (req.url === '/home' && req.method === 'GET') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('Bienvenido a Home');
    } else {
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end("Ruta no encontrada.!!!")
    }
});

server.listen(3000, () => {
    console.log("Servidor Nativo escuchando en http://localhost:3000")
})