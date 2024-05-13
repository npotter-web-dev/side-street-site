import React, { useEffect } from "react";
import background from "../content/images/home-background.png";

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
          <div className="home-header">
            <h1 className="home-title">Side Street Cafe</h1>
            <h2 className="home-subtitle">Where the Locals Eat!</h2>
          </div>

          <p className="home-info">
            They say that music is the language of the soul, and nothing could be truer for this
            unique Rock Band. Composed of a group of inspirational musicians and skillful
            performers, the artists behind 6202 have earned their reputation as a talented band to
            look out for. From live gigs to studio sessions and more, they continue to touch fans
            all over with their distinct musical style, song selection and energy. <br />
            <br />
            Explore the site and enjoy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
