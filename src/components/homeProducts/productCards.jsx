import React, { useState } from 'react';
import elc1 from '../../assets/images/products/elc/elc1.png'
import ZipSound from '../../assets/images/products/zipSound/ZipSound.png'
import servoStabilizer1 from '../../assets/images/products/servoStabilizer/servoStabilizer1.png'
import CNCWoodworks from '../../assets/images/products/CNCWoodworks/CNCWoodworks.png'

import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: 'Zip Sound', image: ZipSound, description: 'Elite in-house public address speakers. Experience world-class audio quality and precision. Ideal for stadiums, theaters, and events, ensuring crystal-clear sound for an immersive and memorable auditory experience' },
  { id: 2, name: 'CNC Woodwork', image: CNCWoodworks, description: 'Explore limitless possibilities with our CNC-carved woodcraft for signboards, main doors, and furniture. Meticulously crafted and customizable, enriched with epoxy resin, brings unique elegance to any space' },
  { id: 3, name: 'ELC', image: elc1, description: 'Digital Electronic Load Controller for Pico and Micro Hydro power. This innovative device stabilizes generator frequency and voltage, boasting a lightweight design for effortless handling and straightforward installation' },
  { id: 4, name: 'Servo Stabilizer', image: servoStabilizer1, description: 'Enhance power reliability with our 3-Phase Servo Stabilizer. Engineered for precision, it regulates voltage across three phases, safeguarding your equipment and ensuring uninterrupted performance in diverse applications' },
];

const ProductCards = () => {
  return (
    <div className="flex justify-evenly">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map(product => (
          <Link to="products" key={product.id}>
            <div className="max-w-64 rounded-lg shadow bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-900 transform transition duration-300 ease-in-out hover:scale-105 h-120">
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