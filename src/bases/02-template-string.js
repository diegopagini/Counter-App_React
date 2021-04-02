/** @format */

const nombre = 'Diego';
const apellido = 'Pagini';
const nombreCompleto = nombre + ' ' + apellido;
const nombreCompletoConBackTicks = `${nombre} ${apellido}`;
console.log(nombreCompleto);
console.log(nombreCompletoConBackTicks);
const algoConBT = `
${nombre}
${apellido}
${1 + 1}
`;
console.log(algoConBT);

export function getSaludo(nombre = 'Diego') {
	return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
