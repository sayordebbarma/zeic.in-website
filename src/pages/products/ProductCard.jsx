import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../assets/images/products/zipSound/zipSound5.png'
import img7 from '../../assets/images/products/zipSound/zipSound7.png'
import img10 from '../../assets/images/products/zipSound/zipSound10.png'


const ProductCard = ({ productId }) => {
    const products = [
        {
            id: 1,
            name: "Zip Sound",
            description: "Elite in-house public address speakers. Experience world-class audio quality and precision. Ideal for stadiums, theaters, and events, ensuring crystal-clear sound for an immersive and memorable auditory experience",
            images: [
                img1,
                img10,
                img7
            ]
        },
        {
            id: 2,
            name: "CNC Woodwork",
            description: "Explore limitless possibilities with our CNC-carved woodcraft for signboards, main doors, and furniture. Meticulously crafted and customizable, enriched with epoxy resin, brings unique elegance to any space",
            images: [
                img7,
                img1,
                img10
            ]
        },
        {
            id: 3,
            name: "ELC",
            description: "Digital Electronic Load Controller for Pico and Micro Hydro power. This innovative device stabilizes generator frequency and voltage, boasting a lightweight design for effortless handling and straightforward installation",
            images: [
                img1,
                img10,
                img7
            ]
        },
        {
            id: 4,
            name: "Servo Stabilizer",
            description: "Enhance power reliability with our 3-Phase Servo Stabilizer. Engineered for precision, it regulates voltage across three phases, safeguarding your equipment and ensuring uninterrupted performance in diverse applications",
            images: [
                img7,
                img1,
                img10
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