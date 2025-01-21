import React from 'react';
import './WhyChooseUs.css';
import backgroundVideo from './video3.mp4';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      {/* Left column with text content */}
      <div className="left-column-last">
        <span className="small-text">Why Choose Us</span>
        <h2 className="main-title">Why Should You <br /> Choose Us?</h2>
        {/* List of reasons to choose the service */}
        <ul className="why-choose-us-list">
          <li className="list-item">Top specialist doctor</li>
          <li className="list-item">State of the art doctor services</li>
          <li className="list-item">Discount for all medical treatment</li>
          <li className="list-item">Enrollment is quick and easy</li>
        </ul>
        {/* Button to book an appointment */}
        <button className="book-appointment-btn">Book Appointment</button>
      </div>

      {/* Right column with background video */}
      <div className="right-column">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          {/* Fallback message for unsupported browsers */}
          Your browser does not support the video tag.
        </video>      
      </div>
    </div>
  );
};

export default WhyChooseUs;
