import React, { Component, useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import EditAffirmationCard from "../EditAffirmationCard/EditAffirmationCard";
import "./AffirmationCard.css";

function AffirmationCard({ user, handleUpdateAffirmation, affirmation, handleDeleteAffirmation }) {

    return (
        <>
            <div className="af-card-container">
            <div className="card a-card">
            <div className="card-header a-header">
            Affirmation
          </div>
                <div className="card-text a-text">
                    <p>{affirmation.text}</p>
                </div>
            </div>
            <div>
                <button className="btn af-delete" onClick={() => handleDeleteAffirmation(affirmation._id)}>x</button>
            </div>
            <>
            <EditAffirmationCard
                affirmation={affirmation}
                handleUpdateAffirmation={handleUpdateAffirmation}
                key={affirmation._id}
              />
            </>
            </div>
        </>
    )
}

export default AffirmationCard;
