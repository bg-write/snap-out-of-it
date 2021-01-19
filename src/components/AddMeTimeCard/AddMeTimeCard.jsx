import React, { Component, useState, useRef, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

export default function AddMeTimeCard({meTime, handleAddMeTime}) {
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
			
			{/* <div>
			{(meTime.length <= 5) ? 'Yas' : 'Not Yas'}
			</div> */}

			<form 
				autoComplete="off"
				ref={formRef}
				onSubmit={(e) => {
					e.preventDefault();
					console.log(state, ' this is state');
					handleAddMeTime(state);
				}}
			>
				<div className="input-group">
					<input
						className="form-control width100"
						placeholder="Check in with yourself ... anything new you want to try?"
						name="text"
						value={state.text}
						onChange={handleChange}
						required
					/>
					{meTime <= 4 ?  
					<span class="input-group-btn">
						<button class="btn btn-info" type="submit" disabled={invalidForm} >
							ADD
						</button>	
					</span>
					:  
					<> <h1 class="btn btn-info">
				Too Many me Times
					 </h1>
					 </>
			 } 
				</div>
			</form>
		</div>
	);
}