import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './MantraCard.css';

function MantraCard({ mantra, handleDeleteMantra }) {

	return (
		<>
		<div>
			<div>
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
