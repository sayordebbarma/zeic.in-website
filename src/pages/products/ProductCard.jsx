import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { products } from '../../components/ProductData';

const ProductCard = ({ productId }) => {
  const [productImg, setProductImg] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const toggleImageExpansion = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  const handlePrev = () => {
    const prevIndex =
      (productImg -
        1 +
        products.find((product) => product.id === productId).images.length) %
      products.find((product) => product.id === productId).images.length;
    setProductImg(prevIndex);
  };

  const handleNext = () => {
    const nextIndex =
      (productImg + 1) %
      products.find((product) => product.id === productId).images.length;
    setProductImg(nextIndex);
  };

  //const product = products.find((product) => product.id === productId);
  const product = products[productId - 1];

  if (!product) {
    return <div>No product found for id: {productId}</div>;
  }

  const isEven = productId % 2 === 0;

  const containerStyle = isEven
    ? 'flex flex-col md:flex-row'
    : 'flex flex-col-reverse md:flex-row';

  const buttonStyleLeft =
    'md:hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full md:p-2 cursor-pointer z-10';
  const buttonStyleRight =
    'md:hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full md:p-2 cursor-pointer z-10';

  return (
    <div className={`mx-20 ${containerStyle} justify-center items-center`}>
      {isEven && (
        <div
          className='max-w-[600px] h-[500px] w-full m-auto py-16 px-4 relative group'
          onClick={toggleImageExpansion}
        >
          <div
            className='w-full h-full rounded-2xl overflow-hidden'
            style={{
              backgroundImage: `url(${product.images[productImg]})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className={`${buttonStyleLeft}`}>
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                onClick={(e) => {
                  handlePrev();
                  e.stopPropagation();
                }}
                className='size-8'
              />
            </div>
            <div className={`${buttonStyleRight}`}>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                onClick={(e) => {
                  handleNext();
                  e.stopPropagation();
                }}
                className='size-8'
              />
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-center items-center w-full h-full bg-gray-100 rounded-lg py-4'>
        <div className='w-3/4 rounded-xl m-4'>
          <h2 className='text-3xl font-bold text-gray-800'>{product.name.toUpperCase()}</h2>
          <ul className='list-disc'>
            <h1 className='font-bold text-l mt-4 text-gray-800'>TYPES: </h1>
            {product.types.map((type, index) => (
              <li key={index} className='text-md p-0 text-gray-600'>
                {type}
              </li>
            ))}
          </ul>
          {Array.isArray(product.specifications) && (
            <ul className='list-disc'>
              <h1 className='font-bold text-l mt-4 text-gray-800'>SPECIFICATIONS: </h1>
              {product.specifications.map((specification, index) => (
                <li key={index} className='text-md p-0 text-gray-600'>
                  {specification}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* For odd product IDs, display images below details */}
      {!isEven && (
        <div
          className='max-w-[600px] h-[500px] w-full m-auto py-16 px-4 relative group'
          onClick={toggleImageExpansion}
        >
          <div
            className='w-full h-full rounded-2xl overflow-hidden'
            style={{
              backgroundImage: `url(${product.images[productImg]})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className={`${buttonStyleLeft}`}>
              <FontAwesomeIcon
                icon={faCircleChevronLeft}
                onClick={(e) => {
                  handlePrev();
                  e.stopPropagation();
                }}
                className='size-8'
              />
            </div>
            <div className={`${buttonStyleRight}`}>
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                onClick={(e) => {
                  handleNext();
                  e.stopPropagation();
                }}
                className='size-8'
              />
            </div>
          </div>
        </div>
      )}
      {/* Expanded image for even product */}
      {isImageExpanded && (
        <div
          className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center z-50'
          onClick={toggleImageExpansion}
        >
          <button
            className='absolute top-5 right-5 text-white text-2xl'
            onClick={toggleImageExpansion}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <img
            src={product.images[productImg]}
            alt='Expanded Image'
            className='max-w-full max-h-full'
          />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
