import React from 'react';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import CareerForm from './CareerForm';
import Footer from '../../components/footer/Footer';
import CareerDesc from './CareerDesc';

const CareerPage = () => {
  return (
    <>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-700' />
      <div className='mt-32 md:grid grid-cols-2'>
        <CareerDesc />
        <CareerForm />
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
