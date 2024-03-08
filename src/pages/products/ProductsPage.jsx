import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import ContactHeader from '../../components/contactHeader/ContactHeader'
import ProductCard from './ProductCard';

function ProductsPage(){
  return (
    <div>
    <ProductCard productId={1} /> 
    <ProductCard productId={2} />
    <ProductCard productId={3} /> 
    <ProductCard productId={4} />
    </div>
  )
}

export default ProductsPage