import React from 'react';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import CareerForm from './CareerForm';
import Footer from '../../components/footer/Footer';
import ContactBG from '../../assets/images/background/careerBG.png';


const CareerPage = () => {
  return (
    <>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-800' />
      <div className='mt-32 md:grid grid-cols-2'>
      <div
      className='hidden md:block rounded-r-3xl my-6'
      style={{
        backgroundImage: `url(${ContactBG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></div>
        <CareerForm />
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
