/** @format */

// Desestructuracion de Objetos

const persona = {
	nombre: 'Tony',
	edad: 45,
	clave: 'Ironman',
	rango: 'Soldado',
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// Desestructuracion
const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

const usContext = ({ nombre, edad, clave, rango = 'Capitan' }) => {
	// console.log(nombre, edad, clave, rango);
	return {
		nombreClave: clave,
		anios: edad,
		latlng: {
			lat: 14.123,
			lng: -12.3232,
		},
	};
};

const {
	nombreClave,
	anios,
	latlng: { lat, lng },
} = usContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
