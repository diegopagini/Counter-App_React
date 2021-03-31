/** @format */

const persona = {
	nombre: 'Tony',
	apellido: 'Stark',
	edad: 45,
	direccion: {
		ciudad: 'New York',
		zip: 55332211,
		lat: 32.5,
		lng: 49.5,
	},
};

// Se copia la referenza del espacio en memoria, no los valores.
const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);

// Forma correcta
const persona3 = { ...persona };
persona3.nombre = 'Steve';
console.log(persona3);
