import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import ContactHeader from '../../components/contactHeader/ContactHeader';
import ProductCard from './ProductCard';
import Footer from '../../components/footer/Footer';

function ProductsPage(){
  return (
    <div>
      <ContactHeader/>
      <Navbar />
      <ProductCard productId={1} /> 
      <ProductCard productId={2} />
      <ProductCard productId={3} /> 
      <ProductCard productId={4} />
      <Footer/>
    </div>
    
  )
}

export default ProductsPage