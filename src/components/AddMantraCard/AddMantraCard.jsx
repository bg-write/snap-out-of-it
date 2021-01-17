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
				<div className="input-group">
					<input
						className="form-control width100"
						placeholder="Add A Mantra..."
						name="text"
						value={state.text}
						onChange={handleChange}
						required
					/>
					<span class="input-group-btn">
						<button class="btn btn-info" type="submit" disabled={invalidForm}>
							ADD
						</button>
					</span>
				</div>
			</form>
		</div>
	);
}
