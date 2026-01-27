# 🧠 Unidad 4: Desarrollo de Backend Avanzado con Node.js

---

## 🔸 ¿Qué es un servidor?

Un **servidor** es un programa que escucha solicitudes (peticiones) de los usuarios y responde con datos.

**Ejemplo de la vida real:**

* Usuario: *"Quiero ver la página de productos."*
* Servidor: *"Ok, acá tenés la lista de productos."*

---

## 🔸 ¿Qué es el protocolo HTTP?

HTTP (HyperText Transfer Protocol) es el lenguaje que usa el navegador para hablar con los servidores.

**Tiene métodos como:**

* `GET`: pedir datos
* `POST`: enviar datos
* `PUT`: actualizar datos
* `DELETE`: eliminar datos

---

## 🔸 Códigos de estado HTTP

Cuando un servidor responde, envía un **código** para decir si todo salió bien o hubo un error:

| Código | Significado           | Explicación simple                |
| ------ | --------------------- | --------------------------------- |
| 200    | OK                    | Todo salió bien                   |
| 201    | Created               | Se creó un recurso                |
| 204    | No Content            | Se borró correctamente, sin datos |
| 400    | Bad Request           | El cliente envió algo incorrecto  |
| 404    | Not Found             | No se encontró lo que pediste     |
| 500    | Internal Server Error | El servidor falló internamente    |

---

## 🔸 ¿Qué es una API?

Una **API** es una forma de que dos programas se comuniquen.

### 🔹 ¿Y una API REST?

Una **API REST** es una forma de organizar rutas para que funcionen como si fueran "acciones" sobre recursos.

**Ejemplo real: API de productos**

| Acción         | Ruta             | Método |
| -------------- | ---------------- | ------ |
| Ver todos      | `/productos`     | GET    |
| Ver uno        | `/productos/:id` | GET    |
| Crear nuevo    | `/productos`     | POST   |
| Actualizar uno | `/productos/:id` | PUT    |
| Eliminar uno   | `/productos/:id` | DELETE |

---

## 🔸 Crear un servidor con Node (módulo `http`)

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola, esto es Node puro!');
  }
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
```

**Explicación:**

* `req` → lo que pide el usuario
* `res` → lo que respondemos
* `writeHead(...)` → escribimos el código de estado y tipo de respuesta
* `res.end(...)` → cerramos y enviamos la respuesta

---

## 🔸 ¿Qué es Express y por qué lo usamos?

Express es una **librería (módulo de terceros)** que hace que trabajar con servidores sea mucho más fácil y rápido.

### ¿Cómo se instala?

```bash
npm install express
```

---

## 🔸 Crear un servidor con Express (más simple)

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Servidor con Express');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
```

---

## 🔸 Middleware `express.json()`

```js
app.use(express.json());
```

Esto permite que Express entienda datos en formato JSON que vienen en el cuerpo (`body`) de las peticiones POST o PUT.

---

## 🔸 Simular una base de datos con un array

```js
let productos = [
  { id: 1, nombre: 'Mouse', precio: 3000 },
  { id: 2, nombre: 'Teclado', precio: 5000 },
];
```

Guardamos los productos **en memoria** mientras el servidor está corriendo.

---

## 🔸 Crear rutas REST con Express

### GET → Listar todos los productos

```js
app.get('/productos', (req, res) => {
  res.status(200).json(productos);
});
```

---

### GET → Obtener uno por ID

```js
app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (!producto) {
    return res.status(404).json({ mensaje: 'No encontrado' });
  }
  res.json(producto);
});
```

---

### POST → Agregar nuevo producto

```js
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  const nuevo = {
    id: productos.length ? productos[productos.length - 1].id + 1 : 1,
    nombre,
    precio,
  };
  productos.push(nuevo);
  res.status(201).json(nuevo);
});
```

---

### PUT → Modificar un producto existente

```js
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);
  if (!producto) return res.status(404).json({ mensaje: 'No encontrado' });

  const { nombre, precio } = req.body;
  if (nombre) producto.nombre = nombre;
  if (precio) producto.precio = precio;

  res.json(producto);
});
```

---

### DELETE → Eliminar un producto

```js
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  productos = productos.filter(p => p.id !== id);
  res.status(204).send();
});
```

---

## 🔸 ¿Cómo probar esta API?

1. Usar **Postman** o **Thunder Client**.
2. Usar método `GET`, `POST`, `PUT` o `DELETE`.
3. Enviar datos JSON cuando sea necesario (en POST o PUT).

   ```json
   { "nombre": "Monitor", "precio": 10000 }
   ```

---

## ✅ Conclusión

* Node.js permite crear servidores usando JavaScript.
* Express simplifica ese proceso.
* Las APIs REST organizan nuestras rutas por acciones.
* Podemos simular una base de datos con arrays.
* Herramientas como Postman nos ayudan a probar estas APIs.

---
