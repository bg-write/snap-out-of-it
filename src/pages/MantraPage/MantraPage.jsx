import React, { useState, useEffect } from "react";
import "./MantraPage.css";
import { Route, useHistory } from "react-router-dom";
import MantraCard from "../../components/MantraCard/MantraCard";
import * as mantraAPI from "../../services/mantras-api";
import AddMantraCard from "../../components/AddMantraCard/AddMantraCard";

// This is our mantra list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function MantraPage({ user }) {
  // Creating state for mantras
  const [person, setPerson] = useState(user);
  const [mantras, setMantras] = useState([]);
  const history = useHistory();

  // Add a mantra
  async function handleAddMantra(newMantraData) {
    const newMantra = await mantraAPI.create(newMantraData);
    setMantras((mantras) => [...mantras, newMantra]);
  }
  // Update a mantra
  async function handleUpdateMantra(updatedMantraData) {
    const updatedMantra = await mantraAPI.update(updatedMantraData);
    const newMantrasArray = mantras.map((m) =>
      m._id === updatedMantra._id ? updatedMantra : m
    );
    setMantras(newMantrasArray);
  }
  // Delete a mantra
  async function handleDeleteMantra(id) {
    if (user) {
      await mantraAPI.deleteOne(id);
      setMantras(mantras.filter((m) => m._id !== id));
    } else {
      history.push("/login");
    }
  }
  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const allMantras = await mantraAPI.getAll();
      console.log(allMantras, "<= mantras");
      setMantras(
        allMantras.filter((mantra) => user._id === mantra.postedBy._id)
      );
    })();
  }, []);

  console.log(person);
  return (
    <div className="mantra-list-container">
      <div className="mantra-heading">
        <h1 className="mantra-page-head"> Mantra</h1>
      </div>

      <div className="mantra-pic-container">
        <img className="mantra-pic" src="/images/Mantrapic.jpg" alt="" />
      </div>

      <div>
        <>
          <AddMantraCard
            user={person}
            mantra={mantras.length}
            handleAddMantra={handleAddMantra}
          />

          {mantras.length ? (
            <>
              {mantras.map((mantra) => (
                <p>
                  <MantraCard
                    user={person}
                    mantra={mantra}
                    handleDeleteMantra={handleDeleteMantra}
                    handleUpdateMantra={handleUpdateMantra}
                    key={mantra._id}
                  />
                </p>
              ))}
            </>
          ) : (
            <p>No Mantras</p>
          )}
        </>
      </div>
    </div>
  );
}
export default MantraPage;
