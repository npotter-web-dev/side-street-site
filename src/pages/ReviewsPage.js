import React, { useEffect } from "react";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";

const ReviewsPage = () => {
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
      <div className="reviews-page">
        <div className="reviews-container">
          <ul className="social-buttons">
            <li>
              <a href={social.yelp} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-yelp" className="social-icons yelp" />
              </a>
            </li>
            <li>
              <a href={social.google} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-google" className="social-icons google" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ReviewsPage;
