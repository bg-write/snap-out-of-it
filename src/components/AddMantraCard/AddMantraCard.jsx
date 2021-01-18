import React, { Component, useState, useRef, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AddMantraCard(mantraNum, handleAddMantra) {
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
					handleAddMantra(state);
				}}
			>
				<div className="input-group">
					<input
						className="form-control width100"
						placeholder="Something like 'I am awesome' or 'I am worthy' ..."
						name="text"
						value={state.text}
						onChange={handleChange}
						required
					/>
				{/* {mantraNum <= 5 ?   */}
					<span class="input-group-btn">
						<button class="btn btn-info" type="submit" disabled={invalidForm}>
							ADD
						</button>
					</span>
						{/* :  <p>too many </p> 
					}  */}
				</div>
			</form>
		</div>
	);
}
