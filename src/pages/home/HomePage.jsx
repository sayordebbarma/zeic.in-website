import React from 'react'
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs'
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/heroSection';
import ContactUs from '../../components/contactUs/ContactUs';


function HomePage(){
  return (
    <>
      <ContactHeader />
      <HeroSection />
      <HomeAboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default HomePage