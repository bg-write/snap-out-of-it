import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './MantraCard.css';




function MantraCard({ mantra, handleDeleteMantra }) {
	
	return (
		<>
		<div>
			<div>
			<h1>This is our Mantra List Item</h1>
			<p>{mantra.text}</p>
			</div>
			<div>
				<button onClick={() => handleDeleteMantra(mantra._id)}>DELETE</button>
			</div>
		</div>
		</>
	);
}

export default MantraCard;
