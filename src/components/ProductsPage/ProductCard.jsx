import React, { useState } from "react";
import "./ProductCard.scss";

const ProductCard = ({ name, description, price, images }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="product-card">
      <div className="image-slider">
        {images[imgIndex] ? (
          <img src={images[imgIndex]} alt={`Slide ${imgIndex + 1}`} />
        ) : (
          <div className="placeholder">Image {imgIndex + 1}</div>
        )}

        <div className="img-pagination">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === imgIndex ? "active" : ""}`}
              onClick={() => setImgIndex(i)}
            ></span>
          ))}
        </div>
      </div>

      <h3>{name}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
};

export default ProductCard;
