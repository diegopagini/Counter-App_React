/** @format */

import { getImagen } from '../../bases/11-async-await';

describe('Pruebas con async-await', () => {
	test('Debe de retornar el url de la imagen', async () => {
		const url = await getImagen();
		expect(url.includes('https')).toBe(true);
	});
});
