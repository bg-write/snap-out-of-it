import React, { useState, useEffect } from "react";
import "./AffirmationsPage.css";
import { Route, useHistory } from "react-router-dom";
import AffirmationCard from "../../components/AffirmationCard/AffirmationCard";
import * as affirmationAPI from "../../services/affirmations-api";
import AddAffirmationCard from "../../components/AddAffirmationCard/AddAffirmationCard";
import Quotes from "../../components/Quotes/Quotes";


// This is our Affirmation list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function AffirmationPage({ user }) {
  // Creating state for Affirmations
  const [person, setPerson] = useState(user);
  const [affirmations, setAffirmations] = useState([]);
  const history = useHistory();

  // Add an affirmation
  async function handleAddAffirmation(newAffirmationData) {
    const newAffirmation = await affirmationAPI.create(newAffirmationData);
    setAffirmations((affirmations) => [...affirmations, newAffirmation]);
  }
  // Update an affirmation
  async function handleUpdateAffirmation(updatedAffirmationData) {
    const updatedAffirmation = await affirmationAPI.update(
      updatedAffirmationData
    );
    const newAffirmationsArray = affirmations.map((m) =>
      m._id === updatedAffirmation._id ? updatedAffirmation : m
    );
    setAffirmations(newAffirmationsArray);
  }
  // Delete a Affirmation
  async function handleDeleteAffirmation(id) {
    if (user) {
      await affirmationAPI.deleteOne(id);
      setAffirmations(affirmations.filter((a) => a._id !== id));
    } else {
      history.push("/login");
    }
  }
  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const allAffirmations = await affirmationAPI.getAll();
      setAffirmations(
        allAffirmations.filter(
          (affirmation) => user._id === affirmation.postedBy._id
        )
      );
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

      <div className="Quotes-big-container">
        <Quotes />
      </div>

      <div className="aff-card-container">
        <>
          <AddAffirmationCard
            user={person}
            affirmation={affirmations.length}
            handleAddAffirmation={handleAddAffirmation}
          />

          {affirmations.length ? (
            <>
              {affirmations.map((affirmation) => (
                <p>
                  <AffirmationCard
                    affirmation={affirmation}
                    handleDeleteAffirmation={handleDeleteAffirmation}
                    handleUpdateAffirmation={handleUpdateAffirmation}
                    key={affirmation._id}
                  />
                </p>
              ))}
            </>
          ) : (
            <p>Add some affirmations</p>
          )}
        </>
      </div>
    </div>
  );
}
export default AffirmationPage;
