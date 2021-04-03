/** @format */
import PrimeraApp from '../../components/PrimeraApp';
import { render } from '@testing-library/react';
import React from 'react';

describe('Pruebas en PrimeraApp', () => {
	test('Debe de mostrar el mensaje "Hola Soy Goku"', () => {
		const saludo = 'Hola, soy Goku';
		const { getByText } = render(<PrimeraApp saludo={saludo} />);

		expect(getByText(saludo)).toBeInTheDocument();
	});
});
