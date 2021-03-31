/** @format */

import heroes from '../data/heroes';

// Solo uno : find
export const getHeroeById = (id) => {
	return heroes.find((heroe) => heroe.id === id);
};
// console.log(getHeroeById(2));

// Todos los que existan : filter
export const getHeroesByOwner = (owner) =>
	heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));

// console.log(owners);
