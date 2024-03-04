import React from 'react'
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs'
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/heroSection/heroSection';
import ContactUs from '../../components/contactUs/ContactUs';
import HomeProducts from '../../components/homeProducts/homeProducts';


function HomePage(){
  return (
    <>
      <ContactHeader />
      <HeroSection />
      <HomeProducts />
      <HomeAboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}

export default HomePage