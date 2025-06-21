import React from "react";
import "./Review.scss";

const reviews = Array.from({ length: 20 }).map((_, i) => ({
  name: `Client ${i + 1}`,
  text: ` Excellent service and great experience!`,
}));

const Review = () => {
  return (
    <div className="review-slider-container">
      <h2>Customer Reviews</h2>
      <div className="review-slider">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <div className="avatar">{review.name.charAt(0)}</div>
              <h4>{review.name}</h4>
            </div>
            <p className="review-text">"{review.text}"</p>
            <div className="stars">⭐⭐⭐⭐☆</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
