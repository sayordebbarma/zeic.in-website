import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import ServicesCard from './ServicesCard';
import Footer from '../../components/footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ServicesPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const targetServiceId = queryParams.get('serviceId');

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
      <Navbar navbarClassName='bg-gray-800' />
      <div className='mt-32 flex flex-wrap flex-col'>
        <ServicesCard targetServiceId={targetServiceId} />
      </div>
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
};

export default ServicesPage;
