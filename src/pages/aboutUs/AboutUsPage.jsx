import React from 'react';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import TeamSection from './teamSection';
import StatisticsSection from './StatisticsSection';
import ImageCarousel from './ImageCarousel';
import Footer from '../../components/footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function AboutUsPage() {
  return (
    <>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-800' />
      <div className='flex flex-wrap flex-col'>
        <ImageCarousel />
        <StatisticsSection />
        <TeamSection/>
      </div>
      <Footer />
      <ScrollToTop smooth className='bg-red-600 hover:bg-red-800' component={<FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} />}/>
    </>
  );
}

export default AboutUsPage;
