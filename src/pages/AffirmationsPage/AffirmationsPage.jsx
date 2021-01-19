import React, { useState, useEffect } from "react";
import "./AffirmationsPage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import AffirmationCard from "../../components/AffirmationCard/AffirmationCard";
import * as affirmationAPI from "../../services/affirmations-api";
import EditAffirmationCard from "../../components/EditAffirmationCard/EditAffirmationCard";
import AddAffirmationCard from "../../components/AddAffirmationCard/AddAffirmationCard";
import Quotes from '../../components/Quotes/Quotes'
import { useStateWithCallback } from "../../hooks/useStateWithCallback";

// This is our Affirmation list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function AffirmationPage(props) {
  // Creating state for Affirmations
  const [affirmations, setAffirmations] = useState([]);
  const history = useHistory();
  useEffect(() => {
    // This is listening for changes in affirmations state, then the function below will reroute
    history.push("/affirmationpage");
  }, [affirmations, history]);
  // Add an affirmation
  async function handleAddAffirmation(newAffirmationData) {
    const newAffirmation = await affirmationAPI.create(newAffirmationData);
    setAffirmations((affirmations) => [...affirmations, newAffirmation]);
  }
  // Update an affirmation
  async function handleUpdateAffirmation(updatedAffirmationData) {
    const updatedAffirmation = await affirmationAPI.update(updatedAffirmationData);
    const newAffirmationsArray = affirmations.map((m) =>
      m._id === updatedAffirmation._id ? updatedAffirmation : m
    );
    setAffirmations(newAffirmationsArray);
  }
  // Delete a Affirmation
  async function handleDeleteAffirmation(id) {
    await affirmationAPI.deleteOne(id);
    setAffirmations(affirmations.filter((a) => a._id !== id));
  }
  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const affirmations = await affirmationAPI.getAll();
      setAffirmations(affirmations);
    })();
  }, []);

  return (
    <div className="spiral-list-container">
      <div className="spiral-heading">
        <h1 className="spiral-page-head"> I'm Spiraling</h1>
      </div>
      <>
        <img className="spiral-pic" src="/images/empathy.jpg" alt="" />
      </>

      <>
      <Quotes />
      </>

      <div>
      <>
      <>
        <AddAffirmationCard
        affirmation={affirmations.length}
         handleAddAffirmation={handleAddAffirmation}
         />
        </>

        {affirmations.map(affirmation => (
         <p>
         <AffirmationCard
         affirmation={affirmation}
         handleDeleteAffirmation={handleDeleteAffirmation}
         key={affirmation._id} />
          <EditAffirmationCard
            affirmation={affirmation}
            handleUpdateAffirmation={handleUpdateAffirmation}
            key={affirmation._id}
          />
         </p>
        ))}
        </>

      </div>
    </div>
  );
}
export default AffirmationPage;
