import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import MantraPage from "../MantraPage/MantraPage.jsx";
// import * as quotesSassyAPI from "../../services/quotesSassy-api";
import Quotes from '../../components/Quotes/Quotes'

// Here we import all the things we are exporting from all our pages

function HomePage({ user }) {

  return (
    <>
      <main>
        <p className="nav-link">Welcome, {user.name}</p>
        <h1>Home actual page</h1>
        <Quotes />
        {/* below this is "Home Page(App.js)" from somewhere else */}

      </main>
    </>
  );
}

export default HomePage;
