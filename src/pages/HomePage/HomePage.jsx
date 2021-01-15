import React, { useState, useEffect } from 'react';
import "./HomePage.css";
import { Route, NavLink, useHistory } from 'react-router-dom';
import MantraList from "../MantraList/MantraList"

// Here we import all the things we are exporting from all our pages

function HomePage() {
    // Creating state for mantras
    // const [mantras, setMantras] = useState([])
    // const history = useHistory;

    // useEffect(() => {
    //     // This is listening for changes in mantras state, then the function below will reroute
    //     history.push('/')
    // }, [mantras])


    return(
        <>
            <div>
                <h1> Home page :D</h1>
                <MantraList />
            </div>
        </>
    )

}


export default HomePage;
