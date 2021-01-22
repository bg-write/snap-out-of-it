import React from "react";
import "./MantraCard.css";
import EditMantraCard from "../EditMantraCard/EditMantraCard";

function MantraCard({ user, mantra, handleDeleteMantra, handleUpdateMantra }) {
  return (
    <>
      <div id="mantra-card-container" className="mantra-card-container">
        <div className="card m-card">
          <div className="card-header m-header">Mantra</div>

          <div className="card-text m-text">
            <p>{mantra.text} </p>

            <button
              className="btn mantra-delete"
              onClick={() => handleDeleteMantra(mantra._id)}
            >
              -
            </button>
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
