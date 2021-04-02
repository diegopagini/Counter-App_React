/** @format */

// Desestructuracion Arreglos
const personajes = ['Goku', 'Vegeta', 'Truks'];
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [p1] = personajes;
const [, p2] = personajes;
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

export const retornaArreglo = () => {
	return ['ABC', 123];
};
const [letras, numeros] = retornaArreglo();
console.log(letras);
console.log(numeros);

const usState = (valor) => {
	return [
		valor,
		() => {
			console.log('Hola Mundo');
		},
	];
};
const [nombre, setNombre] = usState('Goku');
console.log(nombre);
setNombre();
