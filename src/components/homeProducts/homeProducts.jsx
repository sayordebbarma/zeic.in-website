import React from 'react'
import ProductCards from './productCards';

const homeProducts = () => {
  return (
    <div className="m-8">
        <h1 className='text-5xl font-bold text-center text-gray-800 mb-8'>Products</h1>
        <ProductCards />
    </div>
    
  )
}

export default homeProducts