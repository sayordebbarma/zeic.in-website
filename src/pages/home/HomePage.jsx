import React from 'react'
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs'
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/heroSection';
import ContactUsCopy from '../../components/contactUs/ContactUs';
import HomeProducts from '../../components/homeProducts/homeProducts';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function HomePage(){
  return (
    <>
      <ContactHeader />
      <HeroSection />
      <HomeProducts />
      <HomeAboutUs />
      <ContactUsCopy />
      <Footer />
      <ScrollToTop smooth className='bg-red-600 hover:bg-red-800' component={<FontAwesomeIcon icon={faArrowUp} style={{color: "#ffffff",}} />}/>
    </>
  )
}

export default HomePage