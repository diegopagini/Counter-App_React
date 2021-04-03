/** @format */
import { getHeroeById } from './08-import-export';

// // Las promesas por naturaleza son asyncronas
// const promesa = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const heroe = getHeroeById(2);
// 		resolve(heroe);
// 		// reject('No se pudo encontrar el heroe');
// 	}, 2000);
// });

// // Cuando se resuelve
// promesa.then((heroe) => {
// 	console.log('heroe:', heroe);
// });

// // Cuando es reject
// promesa.catch((err) => console.warn(err));

export const getHeroeByIdAsync = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const heroe = getHeroeById(id);
			if (heroe) {
				resolve(heroe);
			} else {
				reject('No se pudo encontrar el héroe');
			}
		}, 1500);
	});
};

// getHeroeByIdAsync(4)
// 	.then((heroe) => console.log('Heroe:', heroe))
// 	.catch((err) => console.warn(err))
// 	.finally(() => console.log('Promsea Finalizada'));
