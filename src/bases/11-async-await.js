/** @format */

const getImagenPromesa = () => new Promise((resolve) => resolve('HOLA'));
getImagenPromesa().then();

export const getImagen = async () => {
	try {
		const apiKey = 'IOKixTh0CF2zErhoctHCjTKpJUJN6XAQ';
		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
		);
		const { data } = await resp.json();
		const { url } = data.images.original;

		const img = document.createElement('img');
		return url;
		// img.src = url;
		// img.loading = 'lazy';
		// img.alt = 'img';
		// document.body.append(img);
	} catch (error) {
		// Manejo del error.
		console.error(error);
	}
};
getImagen();
