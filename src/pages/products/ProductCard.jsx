import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import zs1 from '../../assets/images/products/zipSound/zs1.png'
import zs2 from '../../assets/images/products/zipSound/zs2.png'
import zs3 from '../../assets/images/products/zipSound/zs3.png'
import zs4 from '../../assets/images/products/zipSound/zs4.png'
import zs5 from '../../assets/images/products/zipSound/zs5.png'
import zs6 from '../../assets/images/products/zipSound/zs6.png'
import zs7 from '../../assets/images/products/zipSound/zs7.png'
import cnc1 from '../../assets/images/products/CNCWoodworks/cnc1.png'
import cnc2 from '../../assets/images/products/CNCWoodworks/cnc2.png'
import cnc3 from '../../assets/images/products/CNCWoodworks/cnc3.png'
import cnc4 from '../../assets/images/products/CNCWoodworks/cnc4.png'
import cnc5 from '../../assets/images/products/CNCWoodworks/cnc5.png'
import cnc6 from '../../assets/images/products/CNCWoodworks/cnc6.png'
import cnc7 from '../../assets/images/products/CNCWoodworks/cnc7.png'
import elc1 from '../../assets/images/products/elc/elc.png'
import servo1 from '../../assets/images/products/servoStabilizer/servoStabilizer1.png'

const ProductCard = ({ productId }) => {
    const products = [
        {
            id: 1,
            name: "Zip Sound",
            description: (
                <>
                  <p><strong>Speaker Types for Every Occasion:</strong></p>
                  <ul className='list-disc pl-6 mt-[-10px]'>
                    <li className= 'lg: mb-[-30px]'><strong>High Speakers: </strong> Experience crystal-clear highs that bring out the nuances in your music.</li>
                    <li className= 'lg: mb-[-30px]'><strong>Mid Speakers: </strong> Enjoy well-defined midrange frequencies that enhance vocals and instrumentals.</li>
                    <li className= 'lg: mb-[-30px]'><strong>Low Speakers: </strong> Feel the deep, rich bass that adds power to your audio experience.</li>
                    <li className= 'lg: mb-[-30px]'><strong>Subwoofers: </strong> Immerse yourself in heart-thumping bass, elevating every beat.</li>
                    <li className= 'lg: mb-[-30px]'><strong>Line Array Speakers: </strong> Perfect for large venues, delivering consistent sound coverage.</li>
                    <li className= 'lg: mb-[-5px]'><strong>Monitor Speakers: </strong> Precision audio monitoring for recording studios and professional setups.</li>
                  </ul>
        
                  <p><strong>Power range:</strong> 300 W - 4000 W</p>
                </>
            ),
            images: [
                zs5,
                zs2,
                zs3,
                zs4,
                zs1,
                zs6,
                zs7
            ]
        },
        {
            id: 2,
            name: "CNC Woodwork",
            description: (
                <>
                  <ul className='list-disc pl-6 mt-[-10px]'>
                    <li className= 'lg: mb-[-30px]'><strong>Sign Boards: </strong> Intricately carved with CNC technology and enriched with epoxy resin for a perfect blend of functionality and aesthetics.</li>
                    <li className= 'lg: mb-[-30px]'><strong>Main Doors: </strong>Make a statement at the entrance with main doors that showcase the beauty of CNC carving and the resilience of epoxy resin.</li>
                    <li className= 'lg: mb-[-5px]'><strong>Customized Furniture: </strong> From tables to doors, our wooden-epoxy furniture adds sophistication and individuality to any space.</li>
                  </ul>
        
                  <p><strong>Features:</strong> 
                  <ul className='list-disc pl-6 mt-[-10px]'>
                    <li className= 'lg: mb-[-30px]'>Fully Customizable: Tailor our creations to suit your style and preferences, whether it's a distinctive signboard, a statement main door, or unique wooden-epoxy furniture.</li>
                    <li className= 'lg: mb-[-5px]'>Versatile Applications: Seamless integration into various settings, bringing unique elegance to homes, offices, or commercial spaces.</li>
                  </ul>
                  </p>
                </>
            ),
            images: [
                cnc1,
                cnc2,
                cnc3,
                cnc4,
                cnc5,
                cnc6,
                cnc7
            ]
        },
        {
            id: 3,
            name: "ELC",
            description:  (
                <>
                  <p><strong>Specifications:</strong></p>
                  <ul className='list-disc pl-6 mt-[-10px]'>
                    <li className= 'lg: mb-[-30px]'><strong>Type: </strong> Analogue/Digital</li>
                    <li className= 'lg: mb-[-30px]'><strong>Power: </strong> 5kW to 250kW </li>
                    <li className= 'lg: mb-[-5px]'><strong>Weight: </strong> 1.5 kgs</li>
                  </ul>
        
                  <p><strong>Features: </strong></p>
                  <ul className='list-disc pl-6 mt-[-10px]'>
                    <li className= 'lg: mb-[-30px]'><strong>Efficient Governance: </strong> Functioning as a governor for Pico and Micro Hydropower generator units, the ELC ensures optimal performance.</li>
                    <li className= 'lg: mb-[-30px]'><strong>Effortless Handling: </strong> Boasting a lightweight design, the ELC is easy to handle, offering a user-friendly solution for power stabilization.</li>
                    <li className= 'lg: mb-[-5px]'><strong>Straightforward Installation: </strong> Simplify your setup with straightforward installation, allowing you to experience stabilized power without complexity. </li>
                  </ul>
                </>
            ),
            images: [
                elc1
            ]
        },
        {
            id: 4,
            name: "Servo Stabilizer",
            description: (
                <>
                <p className='lg:mb-3'>Enhance power reliability with our 3-Phase Servo Stabilizer. Engineered for precision, it regulates voltage across three phases, safeguarding your equipment and ensuring uninterrupted performance in diverse applications.</p>
                  <p><strong>Specifications:</strong></p>
                  <ul className='list-disc pl-6 mt-[-10px]'>
                    <li className= 'lg: mb-[-30px]'><strong>Phase: </strong> 3 phase</li>
                    <li className= 'lg: mb-[-30px]'><strong>Capacity: </strong> 40 kVA</li>
                    <li className= 'lg: mb-[-30px]'><strong>Input: </strong> 120-280 V/phase</li>
                    <li className= 'lg: mb-[-5px]'><strong>Output: </strong> 230x3 ± 5%</li>
                  </ul>
        
                </>
            ),
            images: [
                servo1
            ]
        },
    ];

    const [productImg, setProductImg] = useState(0);
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    const toggleImageExpansion = () => {
        setIsImageExpanded(!isImageExpanded);
    };

    const cycleBackground = () => {
        const nextIndex = (productImg + 1) % products.find(product => product.id === productId).images.length;
        setProductImg(nextIndex);
    };

    const product = products.find(product => product.id === productId);

    if (!product) {
        return <div>No product found for id: {productId}</div>;
    }
    
    const isEven = productId % 2 === 0;

    return (
        <div className="flex justify-center items-center">
            {isEven ? (
                <div className='max-w-[600px] h-[500px] w-full m-auto py-16 px-4 relative group' onClick={toggleImageExpansion}>
                    <div className='fe w-full h-full rounded-2xl overflow-hidden'
                        style={{
                            backgroundImage: `url(${product.images[productImg]})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>

                        <div className='hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 cursor-pointer z-10' >
                            <FontAwesomeIcon icon={faCircleChevronLeft} onClick={(e) => {cycleBackground(-1); e.stopPropagation();}} className='size-6' />
                        </div>
                        <div className='hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 cursor-pointer z-10' >
                            <FontAwesomeIcon icon={faCircleChevronRight} onClick={(e) => {cycleBackground(1); e.stopPropagation();}} className='size-6' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center w-full h-full z-10'>
                    <div className='w-3/4 h-3/4 rounded-xl p-8'>
                        <h2 className='text-2xl font-semibold mb-4'>{product.name}</h2>
                        <p className='text-sm'>{product.description}</p>
                    </div>
                </div>
            )}

            {isEven && isImageExpanded && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center z-50" onClick={toggleImageExpansion}>
                    <button className="absolute top-5 right-5 text-white text-2xl" onClick={toggleImageExpansion}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <img src={product.images[productImg]} alt="Expanded Image" className="max-w-full max-h-full" />
                </div>
            )}

            {isEven ? (
                <div className='flex justify-center items-center w-full h-full z-10'>
                    <div className='w-3/4 h-3/4 rounded-xl p-8'>
                        <h2 className='text-2xl font-semibold mb-4'>{product.name}</h2>
                        <p className='text-sm'>{product.description}</p>
                    </div>
                </div>
            ) : (
                <div className='max-w-[600px] h-[500px] w-full m-auto py-16 px-4 relative group' onClick={toggleImageExpansion}>
                    <div className='fe w-full h-full rounded-2xl overflow-hidden'
                        style={{
                            backgroundImage: `url(${product.images[productImg]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'top',
                        }}>

                        <div className='hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 left-5 text-2xl rounded-full p-2 cursor-pointer z-10' >
                            <FontAwesomeIcon icon={faCircleChevronLeft} onClick={(e) => {cycleBackground(-1); e.stopPropagation();}} className='size-6' />
                        </div>
                        <div className='hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 right-5 text-2xl rounded-full p-2 cursor-pointer z-10' >
                            <FontAwesomeIcon icon={faCircleChevronRight} onClick={(e) => {cycleBackground(1); e.stopPropagation();}} className='size-6' />
                        </div>
                    </div>
                </div>
            )}
            
            {!isEven && isImageExpanded && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex justify-center items-center z-50" onClick={toggleImageExpansion}>
                    <button className="absolute top-5 right-5 text-white text-2xl" onClick={toggleImageExpansion}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <img src={product.images[productImg]} alt="Expanded Image" className="max-w-full max-h-full" />
                </div>
            )}
        </div>
    );
}

export default ProductCard