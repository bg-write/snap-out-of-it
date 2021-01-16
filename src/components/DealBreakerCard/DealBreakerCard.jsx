import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './DealBreakerCard.css';

function DealBreakerCard({ dealBreaker, handleDeleteDealBreaker }) {

	return (
		<>
		<div>
			<div>
			<p>{dealBreaker.text}</p>
			</div>
			<div>
				<button onClick={() => handleDeleteDealBreaker(dealBreaker._id)}>DELETE</button>
			</div>
		</div>
		</>
	);
}

export default DealBreakerCard;