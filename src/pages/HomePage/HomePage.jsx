import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import MantraPage from "../MantraPage/MantraPage.jsx";
import * as quotesSassyAPI from "../../services/quotesSassy-api";

// Here we import all the things we are exporting from all our pages

function HomePage({ user }) {
  const [quotesSassy, setQuoteSassy] = useState([]);
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  }, [quotesSassy, history]);

  /*--- Lifecycle Methods ---*/
  useEffect(() => {
    (async function () {
      const quotesSassy = await quotesSassyAPI.getAll();
      setQuoteSassy(quotesSassy);
    })();
  }, [quotesSassy]);

  // function randomQuoteSassy() {
  //   const randomNumber = Math.floor(Math.random() * quotesSassy.length);
  //   return quotesSassy[randomNumber];
  // }

  // function shuffleQuotesSassy(array) {
  //   return array.sort(() => Math.random() - 0.5);
  // }

  // function handleClick() {
  //   const generateRandomQuoteSassy = this.randomQuoteSassy();
  //   this.setState({
  //     quotesSassy: generateRandomQuoteSassy.quotesSassy,
  //   });
  //   this.shuffleQuotesSassy(quotesSassy);
  // }

  return (
    <>
      <header></header>
      <main>
        <p className="nav-link">Welcome, {user.name}</p>
        <h1>Home actual page</h1>

      </main>
    </>
  );
}

export default HomePage;
