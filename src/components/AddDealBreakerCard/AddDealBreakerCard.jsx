import React, { Component, useState, useRef, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AddDealBreakerCard({dealBreaker, handleAddDealBreaker}) {
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
					handleAddDealBreaker(state);
				}}
			>
					<div className="input-group">
					<input
						className="form-control width100"
						placeholder="What are some things you DON'T miss about your ex ..."
						name="text"
						value={state.text}
						onChange={handleChange}
						required
					/>
					{dealBreaker <= 4 ?  
					<span class="input-group-btn">
						<button class="btn btn-info" type="submit" disabled={invalidForm}>
							ADD
						</button>
					</span>
					:  
					<> <h1 class="btn btn-info">
				Too Many Deal breakers
					 </h1>
					 </>
			 }
				</div>
			</form>
		</div>
	);
}