/** @format */
// Variables y Constatnes

const nombre = 'Diego';
const apellido = 'Pagini';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// Var no se debe usar...
if (true) {
	let valorDado = 6;
	const nombre = 'Peter';
	console.log(valorDado, nombre);
}

console.log(valorDado, nombre);
