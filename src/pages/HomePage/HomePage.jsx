import React, { useState, useEffect } from 'react';
import "./HomePage.css";
import { Route, NavLink, useHistory } from 'react-router-dom';
import MantraPage from "../MantraPage/MantraPage";

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
            <header></header>
            <main>
                <h1>Home actual page</h1>
                {/* <Route exact path="/mantraPage" render={() =>
                    <MantraPage/>
                }/> */}
                {/* <Route exact path="/me-time" render={() =>
                    <MeTimePage />
                }/> */}
            </main>

        </>
    )

}


export default HomePage;
