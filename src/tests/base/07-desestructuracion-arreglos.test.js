/** @format */

import { retornaArreglo } from '../../bases/07-desestructuracion-arreglos';

describe('Pruebas en desestructuracion', () => {
	test('Debe de retornar un string y un numero', () => {
		const [letras, numeros] = retornaArreglo();

		expect(letras).toBe('ABC');
		expect(typeof letras).toBe('string');
		expect(numeros).toBe(123);
		expect(typeof numeros).toBe('number');
	});
});
