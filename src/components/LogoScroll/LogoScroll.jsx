import React from 'react';
import "./LogoScroll.css";

const LogoScroll = ({ logos }) => {
    return (
      <div className="logo-scroller">
        <div className="logo-container">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} />
          ))}
          {/* Duplicate logos for a seamless transition */}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt={`Logo ${index}`} />
          ))}
        </div>
      </div>
    );
  };

export default LogoScroll