# Unidad 2 - Programación Backend Avanzada

Este material tiene como objetivo servir como guía teórica y práctica para los siguientes temas fundamentales de JavaScript moderno y programación backend avanzada.

## 🧠 Contenidos y Objetivos

### ✔️ Repaso de Funciones en JavaScript

Las funciones son bloques de código reutilizables. Pueden recibir parámetros y devolver resultados.

```js
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
```

También existen funciones flecha:

```js
const saludar = nombre => `Hola, ${nombre}`;
```

### ✔️ Callbacks

Un **callback** es una función que se pasa como argumento a otra función y se ejecuta luego.

```js
function procesarUsuario(usuario, callback) {
  console.log("Procesando usuario...");
  callback(usuario);
}

procesarUsuario("Juan", function(nombre) {
  console.log(`Usuario procesado: ${nombre}`);
});
```

### ✔️ Promesas

Una promesa representa un valor que estará disponible ahora, en el futuro o nunca.

```js
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por 0");
    else resolve(a / b);
  });
}

dividir(10, 2)
  .then(resultado => console.log("Resultado: ", resultado))
  .catch(error => console.error("Error: ", error));
```

### ✔️ Async / Await

Forma moderna y legible de manejar promesas:

```js
async function calcularDivision() {
  try {
    const resultado = await dividir(10, 2);
    console.log("Resultado async/await: ", resultado);
  } catch (error) {
    console.error("Error async/await: ", error);
  }
}

calcularDivision();
```

### ✔️ Sincronismo vs Asincronismo

* Código sincrónico: se ejecuta línea por línea.
* Código asincrónico: permite seguir ejecutando otras tareas mientras se resuelve una operación.

```js
console.log("Inicio");
setTimeout(() => console.log("Tarea asincrónica"), 1000);
console.log("Fin");
```

## 🚀 ECMAScript Moderno (ES6+)

### ES6

* `let` y `const`
* Template strings
* Arrow functions
* Destructuración
* Spread/Rest operator

```js
const user = { name: "Ana", age: 30 };
const user2 = { ...user, email: "ana@email.com" }; // spread
```

### ES7

* Exponenciación: `2 ** 3 // 8`
* `Array.includes()`

```js
const frutas = ["manzana", "pera"];
frutas.includes("pera"); // true
```

### ES8

* `Object.entries()`, `Object.values()`
* Padding de strings
* Async/await

### ES9

* Spread operator en objetos
* Rest operator

### ES10

* `Array.flat()`
* `trimStart()` y `trimEnd()`

```js
const texto = "   hola mundo   ";
console.log(texto.trim()); // "hola mundo"
```

### ES11

* Nullish Coalescing `??`

```js
const nombre = null ?? "Invitado"; // "Invitado"
```

* Optional chaining: `usuario?.direccion?.calle`

## 💻 Actividad en Clase

```js
const inventario = {
  remeras: 30,
  pantalones: 20,
  zapatillas: 15
};

const stock = {
  gorros: 5,
  zapatillas: 8,
  remeras: 12
};

// Crear lista con todos los tipos de productos sin repetir
const listaProductos = [];
for (const key of Object.keys(inventario)) {
  if (!listaProductos.includes(key)) listaProductos.push(key);
}
for (const key of Object.keys(stock)) {
  if (!listaProductos.includes(key)) listaProductos.push(key);
}

console.log("Tipos de productos:", listaProductos);

// Obtener total de productos vendidos
const total = [...Object.values(inventario), ...Object.values(stock)].reduce((acc, val) => acc + val, 0);
console.log("Total vendidos:", total);
```

## 📌 Ejemplo de uso de map con callback

```js
const numeros = [1, 2, 3];
const duplicados = numeros.map(n => n * 2);
console.log(duplicados);
```

## 📌 Ejemplo de función con callback personalizado

```js
function operacion(a, b, callback) {
  return callback(a, b);
}

function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }

console.log(operacion(5, 2, sumar)); // 7
console.log(operacion(5, 2, restar)); // 3
```

---

## 🧑‍🏫 Profesor  

👨‍💻 **Alejandro Daniel Di Stefano**  
📌 **Desarrollador Full Stack**  
🔗 **GitHub:** [Drako01](https://github.com/Drako01)  
