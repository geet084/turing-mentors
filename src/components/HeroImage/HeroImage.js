import React from 'react';
import pic from '../../images/hero-image.png';

export const HeroImage = () => {
  return (
    <header>
      <img className="hero-image" src={pic} alt="desk" />
      <div className="hero-image-bar">
        <div className="color-left"></div>
        <div className="color-mid"></div>
        <div className="color-right"></div>
      </div>
    </header>
  )
}

export default HeroImage;
