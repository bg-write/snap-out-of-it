import React, { useState, useEffect } from "react";
import "./MantraPage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import MantraCard from "../../components/MantraCard/MantraCard";
import * as mantraAPI from "../../services/mantras-api";
import EditMantraCard from "../../components/EditMantraCard/EditMantraCard";
import AddMantraCard from "../../components/AddMantraCard/AddMantraCard";
import { useStateWithCallback } from "../../hooks/useStateWithCallback";

// This is our mantra list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages

function MantraPage(props) {
  // Creating state for mantras
  const [mantras, setMantras] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // This is listening for changes in mantras state, then the function below will reroute
    history.push("/mantrapage");
  }, [mantras, history]);

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
    await mantraAPI.deleteOne(id);

    setMantras(mantras.filter((m) => m._id !== id));
  }

  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const mantras = await mantraAPI.getAll();
      setMantras(mantras);
    })();
  }, []);

  return (
    <>
      <div>
        <h1> Mantra page!</h1>
      </div>
      <div>
        <h1>MantraCard Component</h1>
        <div>
          {mantras.map(
            (mantra) => (
              (
                <MantraCard
                  mantra={mantra}
                  handleDeleteMantra={handleDeleteMantra}
                  key={mantra._id}
                />
              ),
              (
                <EditMantraCard
                  mantra={mantra}
                  handleUpdateMantra={handleUpdateMantra}
                  key={mantra._id}
                />
              ),
              (
                <AddMantraCard
                  mantra={mantra}
                  handleAddMantra={handleAddMantra}
                  key={mantra._id}
                />
              )
            )
          )}
        </div>
      </div>
    </>
  );
}

export default MantraPage;
