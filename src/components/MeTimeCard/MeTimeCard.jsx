import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './MeTimeCard.css';
import EditMeTimeCard from "../EditMeTimeCard/EditMeTimeCard"

function MeTimeCard({ user, meTime, handleDeleteMeTime, handleUpdateMeTime }) {

	return (
		<>


		<div className="metime-card-container">
			<div className="card met-card">
			<p className="card-text mt-text" >{meTime.text}</p>
			</div>
			<div className="metime-delete-box">
				<button className="btn btn-light metime-delete" onClick={() => handleDeleteMeTime(meTime._id)}>-</button>
			</div>
			<>
			<EditMeTimeCard
                meTime={meTime}
                handleUpdateMeTime={handleUpdateMeTime}
                key={meTime._id}
              />
			</>
		</div>
		</>
	);
}

export default MeTimeCard;