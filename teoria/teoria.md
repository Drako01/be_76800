# Clase 01 - Programación Backend

## 🟨 PARTE 1: NOCIONES BÁSICAS DE JAVASCRIPT

### 📌 ¿Qué es JavaScript?

Es un lenguaje de programación que permite añadir interactividad a las páginas web. Se ejecuta del lado del cliente (navegador), pero también puede ejecutarse del lado del servidor (con Node.js).

### ✨ Conceptos básicos

1. **Variables**

   ```javascript
   let nombre = "Juan";
   const edad = 30;
   var ciudad = "Buenos Aires"; // (menos recomendado hoy)
   ```

2. **Tipos de datos**

   * Números: `42`
   * Cadenas: `"Hola"`
   * Booleanos: `true` / `false`
   * Arreglos: `[1, 2, 3]`
   * Objetos: `{ nombre: "Ana", edad: 25 }`

3. **Condicionales**

   ```javascript
   if (edad >= 18) {
     console.log("Mayor de edad");
   } else {
     console.log("Menor de edad");
   }
   ```

4. **Funciones**

   ```javascript
   function saludar(nombre) {
     return "Hola " + nombre;
   }

   const saludar2 = (nombre) => "Hola " + nombre;
   ```

5. **Bucles**

   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

6. **Eventos en el navegador (DOM)**

   ```javascript
   document.getElementById("boton").addEventListener("click", function() {
     alert("¡Clickeado!");
   });
   ```

---

## 🟩 PARTE 2: EL STACK MERN

MERN es un conjunto de tecnologías JavaScript para construir **aplicaciones web full-stack (front + back)**.

### 📦 1. **MongoDB** – Base de datos NoSQL

* Guarda los datos en formato JSON.
* Ejemplo de documento:

  ```json
  {
    "nombre": "Carlos",
    "edad": 28
  }
  ```

### 🔁 2. **Express.js** – Framework web para Node.js

* Facilita la creación de servidores y rutas.
* Ejemplo básico:

  ```javascript
  const express = require('express');
  const app = express();

  app.get('/', (req, res) => {
    res.send('Hola desde el servidor!');
  });

  app.listen(3000, () => console.log('Servidor en puerto 3000'));
  ```

### ⚙️ 3. **React** – Librería para el frontend

* Se usa para crear interfaces de usuario modernas (SPAs).
* Ejemplo de componente:

  ```jsx
  function Saludo(props) {
    return <h1>Hola, {props.nombre}</h1>;
  }
  ```

### 🚀 4. **Node.js** – Entorno para ejecutar JS en el servidor

* Te permite usar JavaScript del lado del backend.
* Es la base sobre la cual corre Express.

---

## 📊 Cómo se conectan entre sí (flujo general)

1. El usuario interactúa con una **aplicación React (frontend)**.
2. React hace una petición HTTP (por ejemplo, con `fetch`) al **servidor Node.js + Express**.
3. Express recibe la petición y consulta o modifica los datos en **MongoDB**.
4. Express devuelve la respuesta a React y la interfaz se actualiza.

---

## 🛠 Herramientas útiles para trabajar con MERN

* **MongoDB Atlas**: base de datos en la nube.
* **Postman**: para probar APIs REST.
* **VS Code**: editor de código.
* **Nodemon**: reinicio automático del servidor backend.
* **React Developer Tools**: extensión para depurar React.

---

## 📌 Primeros pasos recomendados

1. Aprender bien **JavaScript moderno (ES6)**.
2. Crear pequeños proyectos en **React** (contador, lista de tareas).
3. Aprender a hacer **peticiones HTTP** con `fetch` o `axios`.
4. Montar un servidor simple con **Express**.
5. Usar **MongoDB** para guardar datos desde Express.
6. Conectar todo el flujo **React → Express → MongoDB**.

---

# Tipos de Funciones en JavaScript

---

## 🔢 ¿Qué hace la función?

Queremos crear una función `sumar(a, b)` que reciba dos números y devuelva su suma.

---

### 1. ✅ **Declaración de función (Function Declaration)**

#### Código

```javascript
function sumar(a, b) {
  return a + b;
}

// Uso
console.log(sumar(2, 3)); // 5
```

#### Explicación

* Es la forma más tradicional de declarar funciones.
* Puede ser **invocada antes de su declaración** (hoisting).
* Muy clara para principiantes.

#### Cuándo usarla

Cuando quieras declarar una función general, al comienzo de un archivo o script.

---

### 2. 🧠 **Expresión de función (Function Expression)**

#### Código

```javascript
const sumar = function(a, b) {
  return a + b;
};

// Uso
console.log(sumar(4, 6)); // 10
```

#### Explicación

* La función **se guarda en una variable**.
* No se puede usar antes de declararla (no hay hoisting).
* Útil si queremos pasar funciones como parámetros o almacenarlas.

#### Cuándo usarla

Cuando querés tener más control sobre cuándo y cómo usar la función, o si necesitás una función anónima.

---

### 3. ⚡ **Función Flecha (Arrow Function) – ES6+**

#### Código

```javascript
const sumar = (a, b) => a + b;

// Uso
console.log(sumar(10, 5)); // 15
```

#### Explicación

* Sintaxis más **corta y moderna**.
* No tiene su propio `this`, lo cual es útil en algunos contextos (como en métodos de clases o callbacks).
* Ideal para funciones simples.

#### Cuándo usarla

Cuando querés escribir funciones rápidas y concisas, como callbacks o funciones de una sola línea.

---

### 4. 🌀 **Función anónima autoejecutable (IIFE)**

#### Código

```javascript
const resultado = (function(a, b) {
  return a + b;
})(7, 8);

// Uso
console.log(resultado); // 15
```

#### Explicación

* **Se ejecuta inmediatamente** después de ser definida.
* Se usa cuando querés ejecutar código una sola vez sin dejarlo "visible" o accesible después.
* Encierra el código en su propio ámbito.

#### Cuándo usarla

Para ejecutar una función solo una vez al iniciar el script (como configuraciones).

---

### 5. 🔧 **Método dentro de un objeto (forma clásica)**

#### Código

```javascript
const calculadora = {
  sumar: function(a, b) {
    return a + b;
  }
};

// Uso
console.log(calculadora.sumar(3, 3)); // 6
```

#### Explicación

* Se declara una función como **parte de un objeto**.
* Permite agrupar funciones relacionadas, como una mini-calculadora.

#### Cuándo usarla

Cuando querés agrupar funciones que pertenezcan a un mismo concepto o módulo.

---

### 6. 🧱 **Método abreviado en objeto – ES6+**

#### Código

```javascript
const calculadora = {
  sumar(a, b) {
    return a + b;
  }
};

// Uso
console.log(calculadora.sumar(9, 1)); // 10
```

#### Explicación

* Lo mismo que el ejemplo anterior, pero con una **sintaxis más moderna y reducida**.
* Hace lo mismo, pero es más limpio y legible.

#### Cuándo usarla

Siempre que estés escribiendo objetos con métodos (preferible a la forma anterior).

---

### 7. 🧰 **Método estático en clase – ES6+**

#### Código

```javascript
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

// Uso
console.log(Calculadora.sumar(5, 5)); // 10
```

#### Explicación

* Las **clases** agrupan funciones y datos.
* `static` significa que el método no necesita una instancia (`new`) para usarse.
* Accedés directamente desde la clase.

#### Cuándo usarla

Cuando estés trabajando con clases y necesites funciones utilitarias que no dependen de un objeto creado.

---

### 8. 🛠️ **Función como método de prototipo (estilo antiguo)**

#### Código

```javascript
function Calculadora() {}

Calculadora.prototype.sumar = function(a, b) {
  return a + b;
};

const miCalc = new Calculadora();
console.log(miCalc.sumar(2, 2)); // 4
```

#### Explicación

* Antes de las clases, los métodos se definían en el `prototype`.
* Así, las instancias comparten los métodos y se ahorra memoria.
* Más difícil de entender al inicio.

#### Cuándo usarla

Cuando trabajás con proyectos antiguos que no usan ES6+ o querés entender cómo funciona JavaScript detrás de escena.

---

## 🧾 Conclusión

| Forma              | Sintaxis                    | Ventaja Principal                 | Cuándo usarla                   |
| ------------------ | --------------------------- | --------------------------------- | ------------------------------- |
| Declaración        | `function sumar()`          | Simple, legible, hoisting         | Funciones generales             |
| Expresión          | `const sumar = function()`  | Control total sobre su uso        | Funciones como datos            |
| Flecha             | `const sumar = () => {}`    | Sintaxis corta, sin `this` propio | Callbacks, funciones rápidas    |
| IIFE               | `(function(){})()`          | Ejecuta automáticamente           | Código que corre una vez        |
| Objeto (clásico)   | `obj = { sumar: function }` | Agrupación clara                  | Métodos dentro de objetos       |
| Objeto (abreviado) | `obj = { sumar() {} }`      | Más limpio                        | Idem anterior, estilo moderno   |
| Clase estática     | `class { static sumar() }`  | Sin crear objetos                 | Métodos utilitarios compartidos |
| Prototipo          | `Constructor.prototype`     | Ahorra memoria                    | JS antiguo, bajo nivel          |

---

## 🧑‍🏫 Profesor  

👨‍💻 **Alejandro Daniel Di Stefano**  
📌 **Desarrollador Full Stack**  
🔗 **GitHub:** [Drako01](https://github.com/Drako01)  
