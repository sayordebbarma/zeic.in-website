import React, { useState } from 'react';
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/heroSection';
import ContactUs from '../../components/contactUs/ContactUs';
import HomeProducts from '../../components/homeProducts/homeProducts';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? '#991b1b' : '#e53935',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <ContactHeader />
      <HeroSection />
      <HomeProducts />
      <HomeAboutUs />
      <ContactUs />
      <Footer />
      <ScrollToTop
        smooth
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        component={
          <FontAwesomeIcon icon={faArrowUp} style={{ color: '#ffffff' }} />
        }
      />
    </>
  );
}

export default HomePage;
