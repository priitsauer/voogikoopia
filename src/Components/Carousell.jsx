import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css'; // Import your CSS file for custom styling
import per1 from "./props/pics/per1.jpg";
import per2 from "./props/pics/per2.jpg";
import per3 from "./props/pics/per3.jpg";

function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      image: per1,
      name: "Mari Tort",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      image: per2,
      name: "Peeter Juss",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      image: per3,
      name: "Kalle Kart",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ];

  const handleSlideChange = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className='testimonial-carousel'>
      <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {testimonials.map((testimonial, index) => (
            <li key={index} onClick={() => handleSlideChange(index)} className={activeIndex === index ? "active" : ""}></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={activeIndex === index ? "carousel-item active" : "carousel-item"}>
              <div className="row align-items-center justify-content-center">
                <div className="w-5 col text-center">
                  <img className="client-image rounded-circle fade-in" src={testimonial.image} alt={testimonial.name} />
                
                  <h5 id="comment" className="fade-in">{testimonial.text}</h5>
                  
                  <p className="fade-in">{testimonial.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-controls-container">
          <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev" onClick={() => handleSlideChange((activeIndex - 1 + testimonials.length) % testimonials.length)}>
            <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next" onClick={() => handleSlideChange((activeIndex + 1) % testimonials.length)}>
            <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;