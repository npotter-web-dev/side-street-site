import React, { useEffect } from "react";
import HomeSwiper from "../components/HomeSwiper";
import SlowScroll from "../components/SlowScroll";
import SlickCarousel from "../components/SlickCarousel";

const HomePage = () => {
  // SlowScroll();

  return (
    <div className="page-container">
      <div className="home-page">
        <div className="home-row">
          <div className="home-gallery">
            {/* <HomeSwiper /> */}
            <SlickCarousel />
          </div>
          <div className="home-main">
            <div className="main-box">
              <div className="home-header">
                <h1 className="home-title">Side Street Cafe</h1>
                <h2 className="home-subtitle">Where the Locals Eat!</h2>
              </div>

              <div className="home-info">
                <p className="home-bio">
                  Nestled in the heart of Newbury Park, CA, Side Street Café is your go-to
                  destination for a delightful breakfast or lunch experience. Whether you're craving
                  our signature pancakes or a fresh, gourmet sandwich, our cozy ambiance and
                  friendly staff make every meal special. Come savor the flavors in an environment
                  that feels like home!
                </p>
                <br />
                <div className="home-schedule">
                  <p className="bold">We are open 7 days a week:</p>
                  <p>Mon - Fri from 6:30am - 2:00pm</p>
                  <p>Sat - Sun from 7:00am - 2:00pm</p>
                  <p className="bold">Join us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
