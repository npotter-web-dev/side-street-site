import customerReviews from "../data/customerReviews.js";
import React, { useEffect } from "react";

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <div className="reviews-container">
        {customerReviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-image">{review.image}</div>
            <p className="review-name">{review.name}</p>
            <p className="review-date">{review.date}</p>
            <div className="review-rating">{review.rating}</div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ReviewsPage;
