import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import ProductCard from './ProductCard';
import Footer from '../../components/footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ProductsPage() {
  return (
    <>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-700' />
      <div className='mt-32 flex flex-wrap flex-col'>
        <ProductCard productId={1} />
        <ProductCard productId={2} />
        <ProductCard productId={3} />
        <ProductCard productId={4} />
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
  );
}

export default ProductsPage;
