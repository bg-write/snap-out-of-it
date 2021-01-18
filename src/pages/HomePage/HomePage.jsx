import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import MantraPage from "../MantraPage/MantraPage.jsx";
import QuotesSassy from '../../components/QuotesSassy/QuotesSassy'
import * as quotesSassyAPI from "../../services/quotesSassy-api";
import MantraCard from "../../components/MantraCard/MantraCard";

// Here we import all the things we are exporting from all our pages

function HomePage({ user }) {

  return (
    <>

      <main>
        <p className="nav-link">Welcome, {user.name}</p>
        <h1>Home actual page</h1>
        <QuotesSassy />
        {/* below this is "Home Page(App.js)" from somewhere else */}

      <header></header>
      <main className="home-container">

        <p className="nav-link">Welcome, {user.name}</p>
        <h1>Home</h1>
<div className="divide"></div>
       
       <div className="carousel-container">
        <div id="carouselExampleIndicators" class="carousel slide " interval='false' data-ride="false" data-pause="hover" >
            <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                 <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            </ol>

    <div class="carousel-inner">
    <div class="carousel-item active">
      <div className="square-mantra"></div>
        <div class="carousel-caption  d-md-block">
        <h5>Mantras</h5>
        </div>
    </div>


    <div class="carousel-item">
    <div className="square-MeTime"></div>
      <div class="carousel-caption d-md-block">
        <h5>Me Time</h5>
      </div>
    </div>
    <div class="carousel-item">
    <div className="square-dealbreaker"></div>
      <div class="carousel-caption d-md-block">
        <h5>Deal Breaker</h5>
      </div>
    </div>
    <div class="carousel-item">
    <div className="square-spiraling "></div>
      <div class="carousel-caption d-md-block ">
        <h5>I'm Spiraling</h5>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
       
</div>
      </main>
    </>
  );
}

export default HomePage;
