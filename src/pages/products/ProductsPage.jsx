import React, { useRef } from 'react';
import Navbar from '../../components/navbar/Navbar';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import ProductCard from './ProductCard';
import Footer from '../../components/footer/Footer';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ProductsPage() {
  const product1Ref = useRef(null);
  const product2Ref = useRef(null);
  const product3Ref = useRef(null);
  const product4Ref = useRef(null);

  const productRefs = [product1Ref, product2Ref, product3Ref, product4Ref];

  return (
    <>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-800' />
      <div className='mt-32 mb-32 lg:mt-56 lg:mb-32 flex flex-wrap flex-col'>
        <div ref={product1Ref}>
          <ProductCard productId={1} />
        </div>
        <div ref={product2Ref}>
          <ProductCard productId={2} />
        </div>
        <div ref={product3Ref}>
          <ProductCard productId={3} />
        </div>
        <div ref={product4Ref}>
          <ProductCard productId={4} />
        </div>
      </div>
      <Footer productRefs={productRefs} />
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
