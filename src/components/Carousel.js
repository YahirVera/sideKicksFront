import React, { useState, useEffect } from 'react';
import './Carousel.css';

const slides = [
  { src: '/banner1.jpg', title: 'Sidekicks Originals', subtitle: 'OUR PROMESS - FW24', alt: 'Banner 1' },
  { src: '/banner2_resized.jpg', title: 'Yezzy', subtitle: 'KANYE PIECES', alt: 'Banner 2' },
  { src: '/banner3_resized.jpg', title: 'Bad Bunny', subtitle: 'BENITO PIECES', alt: 'Banner 3' },
  { src: '/banner4_resized.jpg', title: 'Essentials', subtitle: 'ESSENTIALS FEAR OF GOD', alt: 'Banner 4' },
  { src: '/banner5.jpg', title: 'Travis Scott', subtitle: 'TRAVIS MERCH', alt: 'Banner 5' },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.src} alt={slide.alt} className="carousel-image" />
          <div className="carousel-text">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button>COMPRAR AHORA</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;