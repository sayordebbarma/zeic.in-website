import React from 'react'
import './HomePage.css'
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs'
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/heroSection';


function HomePage(){
  return (
    <>
      <ContactHeader />
      <HeroSection />
      <HomeAboutUs />
      <Footer />
    </>
  )
}

export default HomePage