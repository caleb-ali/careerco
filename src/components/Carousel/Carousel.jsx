import React from 'react';
import { useState } from "react";
import "./Carousel.css";
import back from "../../assets/images/Homepage/back.svg";
import front from "../../assets/images/Homepage/front.svg";
import stopwatch from "../../assets/images/Homepage/stopwatch.svg";
import diamond from "../../assets/images/Homepage/diamond.svg";


const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const goBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const goForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 4 ? prevIndex + 1 : prevIndex));
  };


  return (
    <div>
<div className="carousel-container">
      <img src={back} onClick={goBack} className='back_btn'/>
      <div className="carousel">
        {items.slice(currentIndex, currentIndex + 4).map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} width="250px"/>
            <div className='carousel_title_div'>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            </div>
            <div className='card_row'>
              <div className='card_row2'>
                <img src={stopwatch}/>
                <p>10 Weeks</p>
              </div>
              <div className='card_row2'>
              <img src={diamond}/>
                <p>Practical</p>
              </div>
            </div>
            <button className="btn2">
              <a>Buy Course</a>
            </button>
          </div>
        ))}
      </div>
      <img src={front} onClick={goForward} className='forward_btn'/>
    </div>
    <div className="mobcarousel-container">
      <img src={back} onClick={goBack} className='back_btn'/>
      <div className="carousel">
        {items.slice(currentIndex, currentIndex + 1).map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt={item.title} width="230px"/>
            <div className='carousel_title_div'>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            </div>
            <div className='card_row'>
              <div className='card_row2'>
                <img src={stopwatch}/>
                <p>10 Weeks</p>
              </div>
              <div className='card_row2'>
              <img src={diamond}/>
                <p>Practical</p>
              </div>
            </div>
            <button className="btn2">
              <a>Buy Course</a>
            </button>
          </div>
        ))}
      </div>
      <img src={front} onClick={goForward} className='forward_btn'/>
    </div>
    </div>
    
  );
};


export default Carousel;