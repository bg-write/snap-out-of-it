import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './DealBreakerCard.css';
import EditDealBreakerCard from '../EditDealBreakerCard/EditDealBreakerCard'

function DealBreakerCard({ user, dealBreaker, handleDeleteDealBreaker, handleUpdateDealBreaker}) {

	return (
		<>
		<div>
		<div className="deal-card-container">
			<div className="card d-card">
			<div className="card-header d-header">Deal Breaker</div>
			<p className="card-text d-text">{dealBreaker.text}</p>
			</div>
			<div>
				<button className="btn deal-delete" onClick={() => handleDeleteDealBreaker(dealBreaker._id)}>x</button>
			</div>
		</div>
		<>
				<EditDealBreakerCard
                dealBreaker={dealBreaker}
                handleUpdateDealBreaker={handleUpdateDealBreaker}
                key={dealBreaker._id}
              />
		</>
		</div>
		</>
	);
}

export default DealBreakerCard;