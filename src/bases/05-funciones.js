/** @format */

// Crear funciones asi puede traer errores, por pisarlas
function saludar(nombre) {
	return `Hola ${nombre}`;
}
console.log(saludar('Goku'));

saludar = 30;
console.log(saludar);

// Forma correcta
const saludar2 = (nombre) => `Hola ${nombre}`;
// saludar2 = 30; Error
console.log(saludar2('Vegeta'));

const getUser = () => {
	return {
		uid: 'ABC123',
		userName: 'El_Tony_Stark',
	};
};

console.log(getUser());

// Seria lo mismo que:
const getUser2 = () => ({ uid: 'ABC123', userName: 'El_Tony_Stark' });
console.log(getUser2());

// Probando
const getUsuarioActivo = (nombre) => ({ uid: 'ABC', username: nombre });
console.log(getUsuarioActivo('Hulk'));
