import React, { Component, useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "./AffirmationCard.css";

function AffirmationCard({ affirmation, handleDeleteAffirmation }) {

    return (
        <>
            <div>
                <div>
                    <p>{affirmation.text}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleDeleteAffirmation(affirmation._id)}>DELETE</button>
            </div>
        </>
    )
}

export default AffirmationCard;
