import React, { Component, useState, useRef, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AddMeTimeCard(props) {
	const [invalidForm, setValidForm] = useState(true);
	const [state, handleChange] = useForm({
		text: '',
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
	}, [state]);

	return (
		<>
			<h1>Add A Me Time</h1>
			<form
				autoComplete="off"
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					console.log(state, ' this is state');
					props.handleAddMeTime(state);
				}}
			>
				<div>
					<label>Me Time(required)</label>
					<input
						name="text"
						value={state.text}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit" disabled={invalidForm}>
					ADD
				</button>
			</form>
		</>
	);
}