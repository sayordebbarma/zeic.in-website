import React from 'react'
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import ServicesCard from './ServicesCard';
import Footer from '../../components/footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ServicesPage = () => {
  return (
    <>
    <ContactHeader />
    <Navbar navbarClassName='bg-gray-800' />
    <div className='mt-32 flex flex-wrap flex-col'>
      <ServicesCard />
    </div>
    <Footer />
    <ScrollToTop
        smooth
        className='bg-red-600 hover:bg-red-800'
        component={
          <FontAwesomeIcon icon={faArrowUp} style={{ color: '#ffffff' }} />
        }
      />
    </>
  )
}

export default ServicesPage