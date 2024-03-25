import React from 'react';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import CareerForm from './CareerForm';
import Footer from '../../components/footer/Footer';

const CareerPage = () => {
  return (
    <div>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-700' />
      <CareerForm />
      <Footer />
    </div>
  );
};

export default CareerPage;
