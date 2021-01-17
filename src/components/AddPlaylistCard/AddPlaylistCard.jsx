import React, {Component, useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './AddPlaylistCard.css';

function AddPlaylistCard({ playlist, handleDeletePlaylist }) {

	return (
		<>
		<div>
			<div>
			<p>{playlist.text}</p>
			</div>
			<div>
				<button onClick={() => handleDeletePlaylist(playlist._id)}>DELETE</button>
			</div>
		</div>
		</>
	);
}

export default AddPlaylistCard;
