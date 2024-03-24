import React from 'react';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import Navbar from '../../components/navbar/Navbar';
import ContactForm from './ContactForm';
import Footer from '../../components/footer/Footer';

const ContactPage = () => {
  return (
    <div>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-700' />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
