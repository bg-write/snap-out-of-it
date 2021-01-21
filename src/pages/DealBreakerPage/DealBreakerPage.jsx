import React, { useState, useEffect } from "react";
import "./DealBreakerPage.css";
import { Route, useHistory } from "react-router-dom";
import DealBreakerCard from "../../components/DealBreakerCard/DealBreakerCard";
import * as dealBreakerAPI from "../../services/dealBreakers-api";
import AddDealBreakerCard from "../../components/AddDealBreakerCard/AddDealBreakerCard";

// This is our mantra list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function DealBreakerPage({ user }) {
  // Creating state for mantras
  const [person, setPerson] = useState(user);
  const [dealBreakers, setDealBreakers] = useState([]);
  const history = useHistory();

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
    if (user) {
      await dealBreakerAPI.deleteOne(id);
      setDealBreakers(dealBreakers.filter((d) => d._id !== id));
    } else {
      history.push("/login");
    }
  }
  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const allDealBreakers = await dealBreakerAPI.getAll();
      setDealBreakers(
        allDealBreakers.filter((d) => user._id === d.postedBy._id)
      );
    })();
  }, []);

  return (
    <div className="dealbreaker-list-container">
      <div>
        <h1 className="deal-page-head"> Deal Breakers</h1>
      </div>
      <div className="deal-pic-container">
        <img className="dealbreaker-pic" src="/images/dealbreaker.jpg" alt="" />
      </div>
      <div>
        <>
          <AddDealBreakerCard
            user={person}
            dealBreaker={dealBreakers.length}
            handleAddDealBreaker={handleAddDealBreaker}
          />

          {dealBreakers.length ? (
            <>
              {dealBreakers.map((dealBreaker) => (
                <p>
                  <DealBreakerCard
                    user={person}
                    dealBreaker={dealBreaker}
                    handleDeleteDealBreaker={handleDeleteDealBreaker}
                    handleUpdateDealBreaker={handleUpdateDealBreaker}
                    key={dealBreaker._id}
                  />
                </p>
              ))}
            </>
          ) : (
            <p>No Deal Breakers</p>
          )}
        </>
      </div>
    </div>
  );
}
export default DealBreakerPage;
