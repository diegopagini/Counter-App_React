/** @format */

import { getUser, getUsuarioActivo } from '../../bases/05-funciones';

describe('Pruebas en 05-funciones.js', () => {
	test('Debe de retornar un objeto', () => {
		const userTest = {
			uid: 'ABC123',
			userName: 'El_Tony_Stark',
		};

		const user = getUser();

		expect(user).toEqual(userTest);
	});

	test('getUsuario actio dene retornar un objeto', () => {
		const nombre = 'Diego';
		const user = getUsuarioActivo(nombre);

		expect(user).toEqual({
			uid: 'ABC',
			username: nombre,
		});
	});
});
