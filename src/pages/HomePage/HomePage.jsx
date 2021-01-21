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
        <h1>About Us</h1>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          reiciendis inventore voluptas molestiae porro dolorum, minus harum!
          Cupiditate quam, itaque at, saepe hic suscipit perspiciatis delectus
          corrupti excepturi vel debitis.
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
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="square-mantra"></div>
                  <div className="carousel-caption  d-md-block">
                    <h5>Mantras</h5>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="square-MeTime"></div>
                  <div className="carousel-caption d-md-block">
                    <h5>Me Time</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="square-dealbreaker"></div>
                  <div className="carousel-caption d-md-block">
                    <h5>Deal Breaker</h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="square-spiraling "></div>
                  <div className="carousel-caption d-md-block ">
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

         
    <div className="quote-box-home">
            <QuotesSassy />
          </div>

          <div className="space"></div>
      
      </div>
    </div>
  );
}

export default HomePage;
