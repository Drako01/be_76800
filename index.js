// Funciones
// function saludar(nombre, apellido){
//     return console.log(`Hola, ${nombre} ${apellido} como estas?`);
// }

// saludar("Alejandro", "Di Stefano");

// Callbacks
// function procesarUsuario(usuario, callback) {
//     console.log(`Procesando Usuario...`)
//     callback(usuario);
//     console.log(`Terminar de procesar Usuario...`)
// }

// procesarUsuario("Santiago", function(nombre) {
//     console.log(`Usuario Procesado ${nombre}`);
// });

// procesarUsuario("Alejandro", "Di Stefano");

// Promesas
// function dividir(a, b) {
//     return new Promise((resolve, reject) => {
//         if (b === 0) reject("No se puede dividor por Cero");
//         else resolve(a / b);
//     })
// }
// console.log(dividir(4,2));

// console.log(dividir(4,0));

// dividir(100, 0)
//     .then(resultado => console.log("Resultado: " + resultado))
//     .catch(error => console.error("Error, ", error))
//     .finally(setTimeout(() => console.log("Promesa terminada..."), 0));


// dividir(100, 10)
//     .then(resultado => console.log("Resultado: " + resultado))
//     .catch(error => console.error("Error, ", error))
//     .finally(setTimeout(() => console.log("Promesa terminada..."), 0));


// Async / Await
// function dividir(a, b) {
//     return new Promise((resolve, reject) => {
//         if (b === 0) reject("No se puede dividor por Cero");
//         else resolve(a / b);
//     })
// }

// async function calcularUnaDivision() {
//     try{
//         const resultado = await dividir(10,0);
//         console.log("Resultado: (Async / Await) " + resultado);
//     } catch (error) {
//         console.error("Error, (Async / Await) ", error);
//     }
// }

// calcularUnaDivision();


// --------------------------------

// ECMAScript (ES6) 2015
/**
 * let y const
 * Template String
 * Arrow function
 * Destructuracion
 * Spread/Rest operator
 */


// const persona = {
//     nombre: "Alejandro",
//     apellido: "Di Stefano",
//     email: "alejandro@mail.com",
//     pais: "Argentina"
// }

// console.log(persona);

// Destructurar un Objeto
// const { nombre, apellido, email, pais } = persona;

// console.log(nombre);
// console.log(apellido);
// console.log(email);
// console.log(pais);


// const myArray = ["Rojo", "Azul", "Verde", "Amarillo"];

// // Destructurar un Array
// const [primero, ,tercero] = myArray;
// console.log(primero);
// // console.log(segundo);
// console.log(tercero);

// console.log(myArray[0]);

// const persona = {
//     nombre: "Alejandro",
//     apellido: "Di Stefano",
//     email: "alejandro@mail.com",
//     pais: "Argentina"
// }

// const personaConDni = { ...persona, dni: 22333333}

// console.log(personaConDni);
// console.log(...persona); // No se puede hacer

// const myPrimerArray = ["Rojo", "Azul", "Verde", "Amarillo"];
// const mysegundoArray = ["Violeta", "Naranja", "Celeste", "Gris"];

// // const todoJunto = [myPrimerArray, mysegundoArray];
// const todoJunto = [...myPrimerArray, ...mysegundoArray];

// console.log(todoJunto);


// ES7
/**
 * Exponenciacion **
 * Array.includes() -> Boolean
 */

// const base = 3;
// const exponente = 3;
// const resultado = base ** exponente;

// console.log(resultado);

// const myPrimerArray = ["Rojo", "Azul", "Verde", "Amarillo"];

// console.log(myPrimerArray.includes("Banana")); // -> false
// console.log(myPrimerArray.includes("Verde")); // -> true

// const numeros = [1, 2, 3];
// console.log(numeros.includes("Verde"));
// console.log(numeros.includes(1));


// ES8
/**
 * Object.entries() Object.values() Object.keys()
 * Padding de Strings
 * Async / Await
 */

// const persona = {nombre: "Lucia", edad: 30};

// console.log(Object.entries(persona));
// console.log(Object.values(persona));

// const numero = "7"; // String
// console.log(numero.padStart(3, "0"));
// console.log(numero.padEnd(3, "-"));

// ES9
/**
 * Spread Operator en Objetos
 * Rest Operator
 */

// const persona = {
//     id: 1,
//     nombre: "Alejandro",
//     apellido: "Di Stefano",
//     email: "alejandro@mail.com",
//     pais: "Argentina"
// }

// const personaConDni = { ...persona, dni: 22333555 }

// // Rest Operator
// const { id, nombre, ...resto } = personaConDni;

// console.log(id);
// console.log(nombre);

// console.log(resto);

// ES10
/**
 * Arrat.flat()
 * trimStart() and trimEnd()
 */

// const numeros = [1, 2, [3, 4], [5, [6, 7]]];

// console.log(numeros.flat());
// console.log(numeros.flat(2));

// const mensaje = "              Hola                ";
// console.log(mensaje);
// console.log(mensaje.trim());
// console.log(mensaje.trimStart());
// console.log(mensaje.trimEnd());


// ES11
/**
 * Nullish Coalescing ??
 */

// const nombre = null;
// const respuestaDelBackend = nombre ?? "Anonimo";
// // console.log(respuestaDelBackend);

// function obtenerNombreDelUsuario(usuario){
//     return usuario?.nombre ?? "Anonimo";
// }
// console.log(obtenerNombreDelUsuario({nombre: "Lucia"}));
// console.log(obtenerNombreDelUsuario(null));

/**
 * 📝 Actividad: Combinar inventarios
    Dadas dos listas de productos vendidos (inventario y stock), hacé lo siguiente:

    Crear un array listaProductos con todos los tipos de productos, sin repetir.

    Calcular el total de productos vendidos sumando todos los valores de ambos objetos.

    Mostrá ambos resultados por consola.
 */

const inventario = {
    remeras: 30,
    pantalones: 20,
    zapatillas: 15
}
const stock = {
    gorros: 5,
    zapatillas: 8,
    remeras: 12
}

const listaProductos = [];

for (const key of Object.keys(inventario)){
    if(!listaProductos.includes(key)) listaProductos.push(key)
}

for (const key of Object.keys(stock)){
    if(!listaProductos.includes(key)) listaProductos.push(key)
}

console.log("Tipos de productos: ", listaProductos);

const total = [...Object.values(inventario), ...Object.values(stock)].reduce((acc, val) => acc + val, 0);

console.log("Total vendido: ", total);