import React from 'react';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import ContactForm from './ContactForm';
import Footer from '../../components/footer/Footer';

const ContactPage = () => {
  return (
    <div>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-800' />
      <div className='mt-32 mb-10 flex flex-wrap flex-col'>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
