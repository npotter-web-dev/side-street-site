import React, { useEffect } from "react";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import SlowScroll from "../components/SlowScroll";

const ReviewsPage = () => {
  SlowScroll();

  return (
    <div className="page-container">
      <div className="reviews-page">
        <div className="reviews-container">
          <div className="reviews-title">
            <h1>Interested in leaving a review?</h1>
            <p>Share your experience with the world!</p>
          </div>
          <div className="social-container">
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
    </div>
  );
};
export default ReviewsPage;
