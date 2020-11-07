import React, { useState, useEffect } from 'react';
import './counter.scss';

export default function Counter() {

	useEffect(() => console.log("Начало работы"), [])

	const [conunt, setConunt] = useState(0)
	const [min, setMin] = useState(0)
	const [max, setMax] = useState(0)
	const [step, setStep] = useState(1)


	function incrementFn() {
		setConunt(prev => {
			if (prev + step <= max) {
				return prev + step
			}
			return prev
		})
	}
	function decrementFn() {
		setConunt(prev => {
			if (prev - step >= min) {
				return prev - step
			}
			return prev
		})
	}

	function newStep(e) {
		setStep(pev => +e.target.value)
	}
	function newCount(e) {
		setConunt(pev => +e.target.value)
	}
	function newMin(e) {
		setMin(pev => +e.target.value)
	}
	function newMax(e) {
		setMax(pev => +e.target.value)
	}


	return (
		<div className="container">
			<div className="countApp">
				<title className="countApp__title" >«Числовое поле ввода»</title>

				<input
					className="countApp__input"
					type="number"
					min={min}
					max={max}
					onChange={newCount}
					placeholder="Ввидите  начальное число"
					step={step} />

				<input
					className="countApp__input"
					type="number"
					min={0}
					max={max - 1}
					onChange={newMin}
					placeholder="Ввидите минимальное число " />

				<input
					className="countApp__input"
					type="number"
					min={min + 1}
					onChange={newMax}
					placeholder="Ввидите максимальное число " />

				<input
					className="countApp__input"
					type="number"
					min={0}
					onChange={newStep}
					placeholder="Ввидите шаг числа " />

				<div className="countApp__btn">
					<button className="countApp__btnIncrement" onClick={incrementFn}>+</button>
					<button className="countApp__btnDecrement" onClick={decrementFn}>-</button>
				</div>
				<div className="countApp__showConunt">{conunt}</div>
			</div>
		</div>
	)
}