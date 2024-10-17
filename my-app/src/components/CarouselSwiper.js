// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const CarouselSwiper = () => {
  const slides = [
    {
      image: '/carousel/carousel-image-1.jpg',
      alt: 'Description of Image 1',
    },
    {
      image: '/carousel/carousel-image-1.jpg',
      alt: 'Description of Image 2',
    },
    {
      image: '/carousel/carousel-image-1.jpg',
      alt: 'Description of Image 3',
    },
  ];

  return (
    <Swiper
      role="region"
      aria-label="Image Carousel"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} aria-label={`Slide ${index + 1}`}>
          <img src={slide.image} alt={slide.alt} style={{ width: '100%', height: 'auto' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSwiper;
