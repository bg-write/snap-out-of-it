import React, { Component, useState, useRef, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AddMantraCard(props) {
	const [invalidForm, setValidForm] = useState(true);
	const [state, handleChange] = useForm({
		text: '',
	});

	const formRef = useRef();

	useEffect(() => {
		formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
	}, [state]);

	return (
		<div className="add-mantra-container">
			
			<form 
				autoComplete="off"
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					console.log(state, ' this is state');
					props.handleAddMantra(state);
				}}
			>
				<div>
					<input className="form-control" placeholder="Add A Mantra..."
						name="text"
						value={state.text}
						onChange={handleChange}
						required
					/>
					
				</div>
				<div className="add-button">
				<button className="btn btn-light"  type="submit" disabled={invalidForm}>
					ADD
				</button>
				</div>
			</form>
		</div>
	);
}
