import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ServiceAndCarousel.css';

// Array of service objects with their details
const services = [
  {
    image: 'images/cardiology.png',
    title: 'Cardiology',
    description: 'Our board-certified cardiologists treat and prevent cardiovascular problems with a focus on heart health.',
  },
  {
    image: 'images/oncology.png',
    title: 'Oncology',
    description: 'Cancer treatments provided by our oncologists are personalized and provided with unwavering support.',
  },
  {
    image: 'images/neurology.png',
    title: 'Neurology',
    description: 'Specialized care for brain and nerve disorders, ensuring expert diagnosis and compassionate treatment.',
  },
  {
    image: 'images/ophthalmology.png',
    title: 'Ophthalmology',
    description: 'In order to keep your vision healthy, our ophthalmologists provide eye exams and surgeries.',
  },
  {
    image: 'images/pediatrics.png',
    title: 'Pediatrics',
    description: 'Complete care for children, from check-ups to treatments, delivered with compassion and expertise.',
  },
];

const ServiceAndCarousel = () => {
  // State to track the current index of the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track the number of visible items in the carousel based on screen size
  const [visibleItems, setVisibleItems] = useState(3); // Default to 3 items for desktop
  const sectionRef = useRef(null);

  useEffect(() => {
    // Function to update the number of visible items based on window width
    const updateVisibleItems = () => {
      if (window.innerWidth <= 768) {
        setVisibleItems(1); // Show 1 item for mobile
      } else {
        setVisibleItems(3); // Show 3 items for desktop
      }
    };

    // Add event listener to handle window resize
    window.addEventListener('resize', updateVisibleItems);
    updateVisibleItems(); // Set initial value

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  // Function to handle the "Next" button click
  const handleNext = () => {
    if (currentIndex < services.length - visibleItems) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to handle the "Previous" button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="service-carousel-container" ref={sectionRef}>
      <div className="service-section">
        <div className="content-container">
          <span className="service-label">Services</span>
          <h2 className="service-heading">The Best Quality Service You Can Get</h2>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="service-carousel">
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
          }}
        >
          {/* Render each service as a carousel item */}
          {services.map((service, index) => (
            <div className="carousel-item" key={index}>
              <div className="service-card">
                <div className="image-circle">
                  <img src={require(`./${service.image}`)} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <div className="carousel-controls">
          {/* Left control */}
          <FaChevronLeft
            className={`control-left ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={handlePrev}
          />
          {/* Right control */}
          <FaChevronRight
            className={`control-right ${
              currentIndex === services.length - visibleItems ? 'disabled' : ''
            }`}
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceAndCarousel;
