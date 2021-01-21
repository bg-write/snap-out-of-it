import React from 'react';
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
				<button className="btn deal-delete" onClick={() => handleDeleteDealBreaker(dealBreaker._id)}>-</button>
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