import React from 'react';
import { products } from '../ProductData';
import { Link, useNavigate } from 'react-router-dom';

const homeProducts = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId) => {
    navigate(`/products?productId=${productId}`);
    scrollToTop();
  };

  const linkStyle = 'text-blue-500 hover:text-blue-700';

  return (
    <div className='m-8'>
      <h1 className='text-5xl font-bold text-center text-gray-800 my-10'>
        Products
      </h1>
      <div className='flex justify-evenly'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className='cursor-pointer max-w-64 rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-900 transform transition duration-300 ease-in-out hover:scale-105 h-120'
            >
              <img
                className='object-cover rounded-t-lg h-52 w-full'
                src={product.images[0]}
                alt=''
              />
              <div className='p-5 rounded-t-2xl'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                  {product.name}
                </h5>
                <p className='mb-3 font-normal text-gray-400'>
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default homeProducts;
