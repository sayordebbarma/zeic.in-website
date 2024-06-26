import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

  const location = useLocation();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor: isHovered ? '#991b1b' : '#e53935',
    transition: 'background-color 0.3s ease',
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const productId = params.get('productId');
    if (productId) {
      const productIndex = parseInt(productId, 10) - 1;
      if (productRefs[productIndex] && productRefs[productIndex].current) {
        productRefs[productIndex].current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.search]);

  return (
    <>
      <ContactHeader />
      <Navbar navbarClassName='bg-gray-800' />
      <div className='mt-32 mb-8 flex flex-wrap flex-col'>
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
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        component={
          <FontAwesomeIcon icon={faArrowUp} style={{ color: '#ffffff' }} />
        }
      />
    </>
  );
}

export default ProductsPage;
