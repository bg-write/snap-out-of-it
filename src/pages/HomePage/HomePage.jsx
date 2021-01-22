import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { Route } from "react-router-dom";
import QuotesSassy from "../../components/QuotesSassy/QuotesSassy";

function HomePage({ user }) {
  return (
    <div className="home-container-container">

      <div className="banner-top">
      <div className="container-logo"><img className="title-logo" src="/images/logo.jpg" alt="" />
        </div>

          <h1 className="snap-title">Snap Out Of It!</h1>
        
      </div>

      <div className="welcome">
        <p className="nav-link">Welcome, {user.name}</p>
      </div>

      <div className="about-us">
        <h1>Heartbreak Is Hard.</h1>
        <div>
          Love, career, relationships, goals. Life's hard. Let's take a load off and get <span className="sassy-word">sassy</span> and grow.
        </div>
      </div>

      <div className="carousel-box">

        

          <div className="carousel-container">
            <div
              id="carouselExampleIndicators"
              class="carousel slide "
              interval="false"
              data-ride="false"
              data-pause="hover"
            >
              <ol className="carousel-indicators">
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                ></li>
                <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                ></li>
                 <li
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                ></li>
              </ol>

              <div className="carousel-inner">
               
                <div className="carousel-item active">
              
                  
                  <div className="square-mantra">  <img className="carousel-pic"src="images/mantra_nav.png" alt=""/></div>
               
                  <div className="carousel-caption  d-md-block">
                  <p>Wake up with a smile to your own personal mantras.</p>
                    <h5>Mantras</h5>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="square-MeTime"><img className="carousel-pic2"src="images/metime_nav.png" alt=""/></div>
                  <div className="carousel-caption d-md-block">
                  <p>Discover how to create your own healing space for self-love and development.</p>
                    <h5>Me Time</h5>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="square-dealbreaker"> <img className="carousel-pic3"src="images/dealbreaker_nav.png" alt=""/></div>
                  <div className="carousel-caption d-md-block">
                  <p>Remind yourself why these people weren't for you! Let's make that list! </p>
                    <h5>Deal Breaker</h5>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="square-gameplay"> <img className="carousel-pic5"src="images/game_nav.png" alt=""/></div>
                  <div className="carousel-caption d-md-block">
                  <p>Unwind and let go with our relaxing snake game.</p>
                    <h5>Game Time</h5>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="square-spiraling "><img className="carousel-pic4"src="images/spiraling_nav.png" alt=""/></div>
                  <div className="carousel-caption d-md-block ">
                  <p>When those rough times hit you, visit our affirmations page to help lift you up. Please enjoy one of our soothing quotes.</p>
                    <h5>I'm Spiraling</h5>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
      </div>

         
    <div className="quote-box-home">
            <QuotesSassy />
          </div>

          <div className="space"></div>
      
    </div>
  );
}

export default HomePage;
