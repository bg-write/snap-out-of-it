import React, { Component, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MantraCard.css";
import EditMantraCard from "../EditMantraCard/EditMantraCard";

function MantraCard({ user, mantra, handleDeleteMantra, handleUpdateMantra }) {

  return ( 
    <>


      <div className="mantra-card-container">
        <div className="card m-card">
          <div className="card-header m-header">
            Mantra
          </div>

          <div className="card-text m-text">
            <p>{mantra.text} </p>

            <button
              className="btn mantra-delete"
              onClick={() => handleDeleteMantra(mantra._id)}
            >x</button>
          </div>
          
        </div>
        <>
            <EditMantraCard 
              mantra={mantra}
              handleUpdateMantra={handleUpdateMantra}
              key={mantra._id}
            />
          </>
      </div>

    </>
  );
}

export default MantraCard;
