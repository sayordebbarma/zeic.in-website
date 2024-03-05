import React, { useState } from 'react';
import zipSound1 from '../../assets/images/products/zipSound/zipSound1.png'
import zipSound5 from '../../assets/images/products/zipSound/zipSound5.png'
import zipSound7 from '../../assets/images/products/zipSound/zipSound7.png'
import zipSound10 from '../../assets/images/products/zipSound/zipSound10.png'
import servoStabilizer1 from '../../assets/images/products/servoStabilizer/servoStabilizer1.png'

import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Zip speaker', image: zipSound1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 2, name: 'Another product', image: zipSound5, description: 'Another product description.' },
  { id: 3, name: 'Zip speaker', image: zipSound10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 4, name: 'Another product', image: zipSound7, description: 'Another product description.' },
  { id: 5, name: 'Zip speaker', image: servoStabilizer1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
];

const ProductCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const handleClickNext = () => {
    const lastIndex = Math.ceil(products.length / cardsPerPage) - 1;
    if (currentIndex < lastIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleClickPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderCards = () => {
    const startIndex = currentIndex * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return products.slice(startIndex, endIndex).map(product => (
      <Link to="products" key={product.id}>
        <div className="max-w-64 rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-900 transform transition duration-300 ease-in-out hover:scale-105 h-96">
          <img className="object-cover rounded-t-lg h-52 w-full" src={product.image} alt="" />
          <div className="p-5 rounded-t-2xl">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{product.name}</h5>
            <p className="mb-3 font-normal text-gray-400">{product.description}</p>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div>
      <div className="flex flex-row justify-evenly">
        {renderCards()}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handleClickPrev} className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-lg">Prev</button>
        <button onClick={handleClickNext} className="px-4 py-2 bg-gray-800 text-white rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default ProductCards