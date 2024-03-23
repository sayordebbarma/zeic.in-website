import React, { useState, useEffect } from 'react';
import demo1 from '../../assets/images/aboutUs/imgCarousel/demo1.png';
import demo2 from '../../assets/images/aboutUs/imgCarousel/demo2.png';
import demo3 from '../../assets/images/aboutUs/imgCarousel/demo3.png';
import demo4 from '../../assets/images/aboutUs/imgCarousel/demo4.png';

const images = [demo1, demo2, demo3, demo4];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
    <div className="relative w-full h-96 overflow-hidden mt-10">
      {images.map((image, index) => (
        <img
          key={index}
          className={`absolute inset-0 w-full h-full object-cover ${
            currentIndex === index ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'
          }`}
          src={image}
          alt={`Slide ${index}`}
        />
      ))}
    </div>
    <div>
        <h1>About us</h1>
    </div>
    </section>
  );
};

export default ImageCarousel;
