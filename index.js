// Conceptos basicos

// Variables
// var ciudad = "Buenos Aires";
// console.log(ciudad);
// var ciudad = 5;
// console.log(ciudad);
// var ciudad = [1,2,3,4];
// console.log(ciudad);
// -------------------
// let variableA = "Alejandro";
// console.log(variableA);
// // Reasignar el valor
// variableA = 2;
// console.log(variableA);
// variableA = [1,2,3,4];
// console.log(variableA);

// Constantes
// const constanteA = "Alejandro";
// console.log(constanteA);
// No se puede reasignar
// constanteA = 5;
// console.log(constanteA);


// condicionales
// let edad = 46;
// if (edad >= 18) {
//     console.log("Ud es Mayor, puede pasar.!!");
// } else {
//     console.warn("Ud es menor de edad, no puede pasar.!!!!!!");
// }

// for (let i = 0; i < 10; i++){
//     console.log("El Valor de la i es: "+i)
// }

/// Stacks

/**
 * MERN > (Mongo, Express, React, Node)
 * MEAN > (Mongo, Express, Angular, Node)
 * MEVN > (Mongo, Express, Vue, Node)
 * MENN > (Mongo, Express, Next, Node)
 */

// Funciones

// function sumar(a, b) {
//     return a + b;
// }

// console.log(sumar(4,5));
// console.log(sumar(9,-5));

// Funciones anonimas
// const sumar = function (a, b) {
//     return a + b;
// }

// console.log(sumar(4,5));
// console.log(sumar(9,-5));

// Funcion Flecha -> Retorno implicito
// const sumar = (a, b) => a + b;
// console.log(sumar(4,5));
// console.log(sumar(9,-5));

// const calculadora = {
//     sumar: function (a, b) {
//         return a + b;
//     },
//     restar: function (a, b) {
//         return a - b;
//     }
// }

// console.log(calculadora.sumar(4, 5));
// console.log(calculadora.restar(9, -5));

class Calculadora {
    static sumar(a, b) {
        return a + b;
    }
}

console.log(Calculadora.sumar(4, 5));
console.log(Calculadora.sumar(9, -5));