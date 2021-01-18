import React, { useState, useEffect } from "react";
import "./MantraPage.css";
import { Route, NavLink, useHistory, Redirect } from "react-router-dom";
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
    history.push("/mantra-page");
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
    <div className="mantra-list-container">

      <div className="mantra-heading">
        <h1 className="mantra-page-head"> Mantra Page</h1>
      </div>

      <>
        <img className="mantra-pic" src="/images/Mantrapic.jpg" alt="" />
      </>

      <div>
        <>
            <AddMantraCard mantra={mantras.length} handleAddMantra={handleAddMantra} />
        
          {/* {mantras.length <= 5 ?   */}
          <>
          {mantras.map((mantra) => (
            <p>
              <MantraCard
                mantra={mantra}
                handleDeleteMantra={handleDeleteMantra}
                handleUpdateMantra={handleUpdateMantra}
                key={mantra._id}
                />
            </p>
          ))}
          </>
          {/* : <p>too many mantras</p>
        }    */}
        </>
      </div>
    </div>
  );
}
export default MantraPage;
