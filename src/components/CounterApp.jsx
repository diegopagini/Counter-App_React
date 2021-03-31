/** @format */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
	// Hooks
	const [counter, setCounter] = useState(0);

	// handleAdd
	const handleAdd = () => {
		setCounter(counter + 1);
	};

	const handleSubstract = () => {
		setCounter(counter - 1);
	};

	const handleReset = () => {
		setCounter(value);
	};

	return (
		<div>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>

			<button onClick={handleAdd}>+1</button>
			<button onClick={handleReset}>Reset</button>
			<button onClick={handleSubstract}>-1</button>

			{/* <button onClick={handleAdd()}>+1</button> Si se deja de esta forma se ejecuta en cuando renderiza, no es lo que se quiere */}
		</div>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number,
};

export default CounterApp;
