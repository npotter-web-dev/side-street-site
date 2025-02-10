import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundPosition = `50% ${-(scrollPosition / 2)}px`;
      document.querySelector(".page-container").style.backgroundPosition = backgroundPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="home-page">
        <div className="home-main">
          <div className="home-header">
            <h1 className="home-title">Side Street Cafe</h1>
            <h2 className="home-subtitle">Where the Locals Eat!</h2>
          </div>

          <div className="home-info">
            <p className="home-bio">
              Thank you for visiting Side Street Cafè, located in Newbury Park, CA. If you are
              feeling like a great breakfast or lunch in a great environment, Side Street Cafè is
              the place to be!
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
  );
};

export default HomePage;
