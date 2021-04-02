/** @format */
import '@testing-library/jest-dom';
import { getSaludo } from '../../bases/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
	test('getSaludo debe de retornar Hola + Nombre', () => {
		const nombre = 'Diego';
		const saludo = getSaludo(nombre);

		expect(saludo).toBe('Hola ' + nombre);
	});

	// getSaludo debe de retornar Hola Diego si no hay argumento nombre
	test('getSaludo debe de retornar Hola Diego si no hay argumento nombre', () => {
		const saludo = getSaludo();

		expect(saludo).toBe('Hola Diego');
	});
});
