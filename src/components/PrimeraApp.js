/** @format */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Funcional Components
const PrimeraApp = ({ saludo, subtitulo }) => {
	if (!saludo) {
		throw new Error('El saludo es necesario');
	}

	// const PrimeraApp = (props) => { es la forma antigua, hoy en dia se usa la desestructuracion.

	// const saludo = 'Hola mundo desde const';
	// const obj = {
	// 	nombre: 'Diego',
	// 	edad: 29,
	// };

	// Antes del return va la logica.
	return (
		// Fragment == ng-container de Angular
		<Fragment>
			<h1> {saludo} </h1>
			<p> {subtitulo} </p>
			{/* <pre>{JSON.stringify(obj, null, 3)}</pre> */}
		</Fragment>

		// <> === Fragment
		// <>
		// <h1>Hola Mundo</h1>
		// <p>Mi Primera App</p>
		// </>
	);
};

// El TS de React
PrimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired, // Para que sea obligatorio
	otra: PropTypes.number, // Sin isRequired no es obligatorio, se puede enviar vacio.
};

PrimeraApp.defaultProps = {
	subtitulo: 'Soy un subtitulo',
};

export default PrimeraApp;
