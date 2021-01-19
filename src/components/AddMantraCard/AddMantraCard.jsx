import React, { Component, useState, useRef, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AddMantraCard({user, mantra, handleAddMantra}) {
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
		{user ? (
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
				{mantra <= 4 ?  
					<span class="input-group-btn">
						<button class="btn btn-info" type="submit" disabled={invalidForm}>
							ADD
							 </button>
					</span>
						:  
							<> <h1 class="btn btn-info">
						Too Many Mantras
							 </h1>
							 </>
					 } 
				</div>
			</form>
			</div>
			) : <h1>You have no lists</h1>
		}
		</>
		);
	}
