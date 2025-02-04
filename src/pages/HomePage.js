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

          <p className="home-info">
            Thank you for visiting Side Street Cafè, located in Newbury Park, CA. If you are feeling
            like a great breakfast or lunch in a great environment, Side Street Cafè is the place to
            be! <br />
            <br />
            <p>We are open 7 days a week:</p>
            Weekdays from 6:30am to 2:00pm and weekends from 7am to 2pm. Join us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
