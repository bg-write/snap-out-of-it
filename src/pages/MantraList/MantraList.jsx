import React, { useState, useEffect } from 'react';
import "./MantraList.css";
import { Route, NavLink, useHistory } from 'react-router-dom';


// Here we import all the things we are exporting from all our pages

function MantraList() {
    // Creating state for mantras
    const [mantras, setMantras] = useState([])
    const history = useHistory;

    // useEffect(() => {
    //     // This is listening for changes in mantras state, then the function below will reroute
    //     history.push('/')
    // }, [mantras])


    return(
        <>
            <div>
                <h1> Mantra list :D</h1>
            </div>
        </>
    )

}


export default MantraList;
