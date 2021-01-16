import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './MeTimeCard.css';

function MeTimeCard({ meTime, handleDeleteMeTime }) {

	return (
		<>
		<div>
			<div>
			<p>{meTime.text}</p>
			</div>
			<div>
				<button onClick={() => handleDeleteMeTime(meTime._id)}>DELETE</button>
			</div>
		</div>
		</>
	);
}

export default MeTimeCard;