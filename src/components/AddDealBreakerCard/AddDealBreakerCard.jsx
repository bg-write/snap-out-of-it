import React, { Component, useState, useRef, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AddDealBreakerCard(props) {
	const [invalidForm, setValidForm] = useState(true);
	const [state, handleChange] = useForm({
		text: '',
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
	}, [state]);

	return (
		<div className="add-breaker-container">
		
			<form
				autoComplete="off"
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					console.log(state, ' this is state');
					props.handleAddDealBreaker(state);
				}}
			>
				<div>
				
					<input className="form-control" placeholder="Add A Deal breaker..."
						name="text"
						value={state.text}
						onChange={handleChange}
						required
					/>
				</div>
				<div >
				<button className="btn btn-light"type="submit" disabled={invalidForm}>
					ADD
				</button>
				</div>
			</form>
		</div>
	);
}