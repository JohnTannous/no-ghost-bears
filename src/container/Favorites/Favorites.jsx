import React, { useState } from "react";
import {products} from "./products";
import "./Favorites.css";

const Favorites = () => {
  const [activeCard, setActiveCard] = useState(1);

  const handleLeftClick = () => {
    setActiveCard((activeCard - 1 + products.length) % products.length);
  };

  const handleRightClick = () => {
    setActiveCard((activeCard + 1) % products.length);
  };

  return (
    <div className="favorites-container" id="favorites">
      <h2 className="favorites-title">Favorites</h2>
      <div className="favorites-carousel-container">
        <div className="favorites-carousel">
          {products.map((product, index) => (
            <div
              key={index}
              className={`favorites-card ${
                index === activeCard ? "active" : ""
              }`}
              style={{
                transform: `rotateY(${
                  ((index - activeCard) * -40) % 360
                }deg) translateZ(300px)`,
              }}
            >
              <div className="favorites-card-image-container">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="favorites-card-title">{product.title}</div>
              <div className="favorites-card-description">
                {product.description}
              </div>
              <div className="favorites-card-price">{product.price}</div>
            </div>
          ))}
          <div
            className="favorites-carousel-arrow left"
            onClick={handleLeftClick}
          >
            &#8249;
          </div>
          <div
            className="favorites-carousel-arrow right"
            onClick={handleRightClick}
          >
            &#8250;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;