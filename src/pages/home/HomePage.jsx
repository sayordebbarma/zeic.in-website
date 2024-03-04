import React from 'react'
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs'
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/heroSection';
import ContactUs from '../../components/contactUs/ContactUs';
import Timetime from '../../components/test/timetime';


function HomePage(){
  return (
    <>
      <ContactHeader />
      <HeroSection />
      <HomeAboutUs />
      <ContactUs />
      <Timetime />
      <Footer />
    </>
  )
}

export default HomePage