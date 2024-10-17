import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/carouselbootstrap.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const CarouselBootstrap = ({ readElement }) => {
  const carouselRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    const carouselElement = document.getElementById('carouselExample');
    const carousel = new Carousel(carouselElement, {
      interval: 4000, 
      ride: 'carousel', 
    });

    carouselRef.current = carousel;
    startAutoSlide();

    return () => {
      clearInterval(intervalRef.current);
      carousel.dispose();
    };
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      carouselRef.current.next();
    }, 4000); 
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current); 
    } else {
      startAutoSlide(); 
    }
    setIsPlaying(!isPlaying);
  };

  const slides = [
    {
      image: '/carousel/carousel-image-1.jpg',
      alt: 'Description of Image 1',
      link: '#',
    },
    {
      image: '/carousel/carousel-image-2.jpg',
      alt: 'Description of Image 2',
      link: 'https://indiaai.gov.in/article/unlock-the-potential-of-ai-apply-now-for-the-indiaai-innovation-challenge',
    },
    {
      image: '/carousel/carousel-image-3.jpg',
      alt: 'Description of Image 3',
      link: 'https://www.meity.gov.in/tenders/empanelment-agencies-cloud-based-ai-services',
    },
    {
      image: '/carousel/carousel-image-4.jpg',
      alt: 'Description of Image 4',
      link: 'https://www.meity.gov.in/69a',
    },
  ];

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-pause="hover"
      aria-label="Image Carousel"
      style={{ position: 'relative' }}
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div 
            className={`carousel-item ${index === 0 ? 'active' : ''}`} 
            key={index}
            onMouseEnter={() => readElement(slide.alt)}  // Add TTS on mouse hover
          >
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.image} className="d-block w-100" alt={slide.alt} />
            </a>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        aria-label="Previous Slide"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        aria-label="Next Slide"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      <button
        onClick={togglePlayPause}
        className="btn carousel-overlay-button"
        style={{ 
          fontSize: '44px', 
          opacity: 0.4, 
          color: "#ffffff",
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          zIndex: 10 
        }}
        aria-label={isPlaying ? 'Pause the carousel' : 'Play the carousel'}
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
    </div>
  );
};

export default CarouselBootstrap;


