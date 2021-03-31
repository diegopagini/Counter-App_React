/** @format */

// Tradicional
const activo = true;

let mensaje = '';

if (activo) {
	mensaje = 'Activo';
} else {
	mensaje = 'Inactivo';
}
console.log(mensaje);

// Ternario
const msg = activo ? 'Activo' : 'Inactivo';
// const msg = activo ? 'Activo' : null;
// const msg = (activo) && 'Activo' // Activo
// const msg = (!activo) && 'Activo' // false

console.log(msg);
