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
		<div className="add-metime-container">
			
			<form 
				autoComplete="off"
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					console.log(state, ' this is state');
					props.handleAddMeTime(state);
				}}
			>
				<div className="metime-input">
					
					<input className="form-control" placeholder="Add A Me Time..."
						name="text"
						value={state.text}
						onChange={handleChange}
						required
					/>
				</div>
				<button className="btn btn-light" type="submit" disabled={invalidForm}>
					ADD
				</button>
			</form>
		</div>
	);
}