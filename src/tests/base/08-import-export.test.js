/** @format */

import { getHeroeById, getHeroesByOwner } from '../../bases/08-import-export';
import heroes from '../data/heroes';

describe('Pruebas en funciones de heroes', () => {
	test('Debe de retornar un heroe por id', () => {
		const id = 1;
		const heroe = getHeroeById(id);
		const heroeData = heroes.find((heroe) => heroe.id === id);
		expect(heroe).toEqual(heroeData);
	});

	test('Debe de retornar un undefined si Heroe no existe', () => {
		const id = 10;
		const heroe = getHeroeById(id);
		expect(heroe).toBe(undefined);
	});

	test('Debe de retornar los heroes de DC', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);
		const heroesData = heroes.filter((h) => h.owner === owner);
		expect(heroes).toEqual(heroesData);
	});

	test('Debe de retornar un arreglo con los heroes de Marvel', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);
		expect(heroes.length).toBe(2);
	});
});
