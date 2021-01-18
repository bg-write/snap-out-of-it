import React, { useState, useEffect } from "react";
import "./MeTimePage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import MeTimeCard from "../../components/MeTimeCard/MeTimeCard";
import * as meTimeAPI from "../../services/meTime-api";
import EditMeTimeCard from "../../components/EditMeTimeCard/EditMeTimeCard";
import AddMeTimeCard from "../../components/AddMeTimeCard/AddMeTimeCard";
import { useStateWithCallback } from "../../hooks/useStateWithCallback";

// This is our me time list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function MeTimePage(props) {
  // Creating state for me time
  const [meTime, setMeTime] = useState([]);
  const history = useHistory();
  useEffect(() => {
    // This is listening for changes in mantras state, then the function below will reroute
    history.push("/metimepage");
  }, [meTime, history]);
  // Add a mantra
  async function handleAddMeTime(newMeTimeData) {
    const newMeTime = await meTimeAPI.create(newMeTimeData);
    setMeTime((meTime) => [...meTime, newMeTime]);
  }
  // Update a mantra
  async function handleUpdateMeTime(updatedMeTimeData) {
    const updatedMeTime = await meTimeAPI.update(updatedMeTimeData);
    const newMeTimeArray = meTime.map((m) =>
      m._id === updatedMeTime._id ? updatedMeTime : m
    );
    setMeTime(newMeTimeArray);
  }
  // Delete a mantra
  async function handleDeleteMeTime(id) {
    await meTimeAPI.deleteOne(id);
    setMeTime(meTime.filter((m) => m._id !== id));
  }
  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const meTime = await meTimeAPI.getAll();
      setMeTime(meTime);
    })();
  }, []);

  return (
    <div className="metime-list-container">
      <div>
        <h1 className="metime-page-head"> Me Time</h1>
      </div>
      <div>
        <img className="metime-pic" src="/images/selflove2.png" alt="" />
        <>
          <>
            <AddMeTimeCard meTime={meTime.length} handleAddMeTime={handleAddMeTime} />
          </>
          {meTime.map((meTime) => (
            <p>
              <MeTimeCard
                meTime={meTime}
                handleDeleteMeTime={handleDeleteMeTime}
                key={meTime._id}
              />
              <EditMeTimeCard
                meTime={meTime}
                handleUpdateMeTime={handleUpdateMeTime}
                key={meTime._id}
              />
            </p>
          ))}
        </>
      </div>
    </div>
  );
}
export default MeTimePage;
