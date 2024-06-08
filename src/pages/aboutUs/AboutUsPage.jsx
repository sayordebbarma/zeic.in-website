import React, { useState } from 'react';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import TeamSection from './teamSection';
import StatisticsSection from './StatisticsSection';
import ImageCarousel from './ImageCarousel';
import Footer from '../../components/footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import YtSection from './YtSection';

function AboutUsPage() {
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
      <Navbar navbarClassName='bg-gray-800' />
      <div className='flex flex-wrap flex-col'>
        <ImageCarousel />
        <StatisticsSection />
        <YtSection />
        <TeamSection />
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
}

export default AboutUsPage;
