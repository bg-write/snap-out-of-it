import React, { useState, useEffect } from "react";
import "./DealBreakerPage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import DealBreakerCard from "../../components/DealBreakerCard/DealBreakerCard";
import * as dealBreakerAPI from "../../services/dealBreakers-api";
import EditDealBreakerCard from "../../components/EditDealBreakerCard/EditDealBreakerCard";
import AddDealBreakerCard from "../../components/AddDealBreakerCard/AddDealBreakerCard";
import { useStateWithCallback } from "../../hooks/useStateWithCallback";

// This is our mantra list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function DealBreakerPage(props) {
  // Creating state for mantras
  const [dealBreakers, setDealBreakers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    // This is listening for changes in mantras state, then the function below will reroute
    history.push("/dealbreakerpage");
  }, [dealBreakers, history]);
  // Add a mantra
  async function handleAddDealBreaker(newDealBreakerData) {
    const newDealBreaker = await dealBreakerAPI.create(newDealBreakerData);
    setDealBreakers((dealBreakers) => [...dealBreakers, newDealBreaker]);
  }
  // Update a mantra
  async function handleUpdateDealBreaker(updatedDealBreakerData) {
    const updatedDealBreaker = await dealBreakerAPI.update(
      updatedDealBreakerData
    );
    const newDealBreakersArray = dealBreakers.map((d) =>
      d._id === updatedDealBreaker._id ? updatedDealBreaker : d
    );
    setDealBreakers(newDealBreakersArray);
  }
  // Delete a mantra
  async function handleDeleteDealBreaker(id) {
    await dealBreakerAPI.deleteOne(id);
    setDealBreakers(dealBreakers.filter((d) => d._id !== id));
  }
  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const dealBreakers = await dealBreakerAPI.getAll();
      setDealBreakers(dealBreakers);
    })();
  }, []);

  return (
    <div className="dealbreaker-list-container">
      <div>
        <h1 className="deal-page-head"> Deal Breakers</h1>
      </div>
      <>
        <img className="dealbreaker-pic" src="/images/dealbreaker.jpg" alt="" />
      </>
      <div>
        <>
          <>
            <AddDealBreakerCard  dealBreaker={dealBreakers.length} handleAddDealBreaker={handleAddDealBreaker} />
          </>
          {dealBreakers.map((dealBreaker) => (
            <p>
              <DealBreakerCard
                dealBreaker={dealBreaker}
                handleDeleteDealBreaker={handleDeleteDealBreaker}
                key={dealBreaker._id}
              />
              <EditDealBreakerCard
                dealBreaker={dealBreaker}
                handleUpdateDealBreaker={handleUpdateDealBreaker}
                key={dealBreaker._id}
              />
            </p>
          ))}
        </>
      </div>
    </div>
  );
}
export default DealBreakerPage;
