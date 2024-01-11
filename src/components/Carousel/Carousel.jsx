import React from 'react';
import { useState } from "react";
import "./Carousel.css";

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 3 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div className="carousel-container">
      <button onClick={goBack}>Back</button>
      <div className="carousel">
        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <button>{item.buttonText}</button>
          </div>
        ))}
      </div>
      <button onClick={goForward}>Forward</button>
    </div>
  );
};


export default Carousel;