/** @format */

// Arreglos en JS

const arreglo = new Array(100);
arreglo.fill('Hola');
arreglo.push(1);
console.log(arreglo);

const arr = [];
// No utilizar el push, para no modiifcar el arreglo.
arr.push(1);
arr.push(2);
arr.push(3);

console.log(arr);

let arr2 = arr;
arr2.push(4);
console.log(arr, arr2); // Mismo caso que con los objetos, se modifica el espacio en memoria.

// Solucion
let arr3 = [...arr];
arr3.push(5);
console.log(arr, arr3);

// Mejor practica
const arr4 = arr2.map(function (numero) {
	return numero;
});
console.log(arr4);
