import React, { useState, useEffect } from "react";
import "./MeTimePage.css";
import { Route, useHistory } from "react-router-dom";
import MeTimeCard from "../../components/MeTimeCard/MeTimeCard";
import * as meTimeAPI from "../../services/meTime-api";
import AddMeTimeCard from "../../components/AddMeTimeCard/AddMeTimeCard";

// This is our me time list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function MeTimePage({ user }) {
  // Creating state for me time
  const [person, setPerson] = useState(user);
  const [meTime, setMeTime] = useState([]);
  const history = useHistory();

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
    if (user) {
      await meTimeAPI.deleteOne(id);
      setMeTime(meTime.filter((m) => m._id !== id));
    } else {
      history.push("/login");
    }
  }
  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const allMeTime = await meTimeAPI.getAll();

      console.log(allMeTime, "<= meTime");
      setMeTime(allMeTime.filter((meTime) => user._id === meTime.postedBy._id));
    })();
  }, []);

  console.log(person);
  return (
    <div className="metime-list-containers">

      <div className="metime-heading">
        <h1 className="metime-page-head"> Me Time</h1>
      </div>

      <div className="metime-pic-container">
        <img className="metime-pic" src="/images/selflove2.png" alt="" />
      </div>

      <div>
        <>
          <AddMeTimeCard
            user={person}
            meTime={meTime.length}
            handleAddMeTime={handleAddMeTime}
          />

          {meTime.length ? (
            <>
              {meTime.map((meTime) => (
                <p>
                  <MeTimeCard
                    user={person}
                    meTime={meTime}
                    handleDeleteMeTime={handleDeleteMeTime}
                    handleUpdateMeTime={handleUpdateMeTime}
                    key={meTime._id}
                  />
                </p>
              ))}
            </>
          ) : (
            <p>No Me Times</p>
          )}
        </>
      </div>
    </div>
  );
}
export default MeTimePage;
