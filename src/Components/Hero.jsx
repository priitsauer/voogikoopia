import React from 'react';
import myImage from './props/pics/HeroImg.jpg'; // Import the image


const Hero = () => {
    return (
        <div className='HeroB'>
              <img src={myImage} className="hero-image" alt="Hero" />
              <div className="hero-content">
                <h1>Loo oma veebileht mugavalt</h1>
                <button type="button" className="btn btn-dark">Alusta tasuta!</button>
                
            </div>
        </div>
    );
}

export default Hero;