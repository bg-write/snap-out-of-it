import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './PlaylistCard.css';

function PlaylistCard({ playlist, handleDeletePlaylist }) {

	return (
		<>
		<div>
			<div>
			<p>This is where the playlist should be displayed</p>
			</div>
			<div>
				<button onClick={() => handleDeletePlaylist(playlist._id)}>DELETE</button>
			</div>
		</div>
		</>
	);
}

export default PlaylistCard;
