import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';
import aboutImage from './about-image.png';

const AboutSection = () => {
  // State hooks for animating counters
  const [patientsCount, setPatientsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Prevent reanimation
  const sectionRef = useRef(null); // Ref to track the section's visibility

  useEffect(() => {
    // Intersection Observer to trigger animation when the section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounts();
          setHasAnimated(true); // Prevent reanimation
          observer.disconnect(); // Stop observing after animation
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Function to animate count values
  const animateCounts = () => {
    const animateCount = (target, setter, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target)); // Time for each step
      const timer = setInterval(() => {
        start += 1;
        setter(start);
        if (start === target) clearInterval(timer);
      }, stepTime);
    };

    // Animating each count with different target values
    animateCount(50, setPatientsCount, 2000); // Animate to 50K
    animateCount(5, setExperienceCount, 2000); // Animate to 5
    animateCount(300, setReviewsCount, 2000); // Animate to 300
    animateCount(24, setServiceCount, 2000); // Animate to 24
  };

  return (
    <div className="about-section-container" ref={sectionRef}>
      {/* Left column with text and animated counters */}
      <div className="about-left-column">
        <span className="about-label">About</span>
        <h2 className="about-title">Stay Healthy With 100% Treatment</h2>
        <p>
          At MedCare, our unwavering commitment to health excellence drives our mission. With a dedicated team of medical experts, cutting-edge research, and a passion for compassionate care.
        </p>

        {/* Grid with animated count boxes */}
        <div className="info-grid">
          <div className="info-box">
            <h3>{patientsCount}K +</h3>
            <p>Recover Patients</p>
          </div>
          <div className="info-box">
            <h3>{experienceCount} +</h3>
            <p>Years Experience</p>
          </div>
          <div className="info-box">
            <h3>{reviewsCount} +</h3>
            <p>Positive Reviews</p>
          </div>
          <div className="info-box">
            <h3>{serviceCount}/7</h3>
            <p>Customer Service</p>
          </div>
        </div>

        <Link to="/about" className="learn-more-button">
          Learn More
        </Link>
      </div>

      {/* Right column with image */}
      <div className="about-right-column">
        <img src={aboutImage} alt="About" className="about-image" />
      </div>
    </div>
  );
};

export default AboutSection;
