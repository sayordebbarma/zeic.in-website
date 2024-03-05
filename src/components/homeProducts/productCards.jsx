import React, { useState } from 'react';
import zipSound1 from '../../assets/images/products/zipSound/zipSound1.png'
import zipSound5 from '../../assets/images/products/zipSound/zipSound5.png'
import zipSound7 from '../../assets/images/products/zipSound/zipSound7.png'
import zipSound10 from '../../assets/images/products/zipSound/zipSound10.png'
import servoStabilizer1 from '../../assets/images/products/servoStabilizer/servoStabilizer1.png'
import CNCWoodworks1 from '../../assets/images/products/CNCWoodworks/CNCWoodworks1.png'

import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Zip speaker', image: zipSound1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 2, name: 'Another product', image: zipSound5, description: 'Another product description.' },
  { id: 3, name: 'Zip speaker', image: zipSound10, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 4, name: 'Another product', image: zipSound7, description: 'Another product description.' },
  { id: 5, name: 'Servo Stabilizer', image: servoStabilizer1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { id: 6, name: 'CNC Woodwork', image: CNCWoodworks1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
];

const ProductCards = () => {
  return (
    <div className="flex justify-evenly">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map(product => (
          <Link to="products" key={product.id}>
            <div className="max-w-64 rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-900 transform transition duration-300 ease-in-out hover:scale-105 h-96">
              <img className="object-cover rounded-t-lg h-52 w-full" src={product.image} alt="" />
              <div className="p-5 rounded-t-2xl">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{product.name}</h5>
                <p className="mb-3 font-normal text-gray-400">{product.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCards