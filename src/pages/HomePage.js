import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundPosition = `50% ${-(scrollPosition / 2)}px`;
      document.querySelector(".home-img").style.backgroundPosition = backgroundPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="home-img">
        <div className="home-container">
          <div className="home-main">
            <div className="home-header">
              <h1 className="home-title">Side Street Cafe</h1>
              <h2 className="home-subtitle">Where the Locals Eat!</h2>
            </div>

            <p className="home-info">
              Thank you for visiting Side Street Cafè, located in Newbury Park, CA. If you are
              feeling like a great breakfast or lunch in a great environment, Side Street Cafè is
              the place to be! <br />
              <br />
              <b>We are open 7 days a week:</b>
              <br />
              Weekdays from 6:30am to 2:00pm and weekends from 7am to 2pm. Join us!
            </p>
          </div>

          <div className="home-bio">
            <p>
              With a rich background in fine dining, Suzanne Garman made a life-changing decision to
              shift from the bustling nightlife of the dinner scene to the vibrant and welcoming
              atmosphere of daytime dining. In 2002, she embarked on this new journey by purchasing
              Side Street Café. This move has proven to be the best business decision of her career,
              allowing her to blend her culinary expertise with a passion for creating delightful
              breakfast and lunch experiences. Since then, Suzanne has been dedicated to offering
              exceptional meals and a warm, inviting environment for all guests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
