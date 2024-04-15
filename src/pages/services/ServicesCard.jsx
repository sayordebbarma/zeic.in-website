import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import test1 from '../../assets/images/products/zipSound/zs1.png';
import test2 from '../../assets/images/products/zipSound/zs2.png';
import test3 from '../../assets/images/products/zipSound/zs3.png';
import test4 from '../../assets/images/products/zipSound/zs4.png';

const cardData = [
  {
    title: 'Sound System Rental',
    content: 'Here is some content for card 1. You can customize it as needed.',
    images: [test1, test2, test3, test4],
  },
  {
    title: 'Stage Rental',
    content: 'Here is some content for card 2. You can customize it as needed.',
    images: [test4, test1, test4, test1],
  },
  {
    title: 'Generator Rental',
    content: 'Here is some content for card 3. You can customize it as needed.',
    images: [test3, test2, test1, test1],
  },
  {
    title: 'Audio Engineering Course',
    content: 'Here is some content for card 4. You can customize it as needed.',
    images: [test2, test3, test4, test1],
  },
];

const ServicesCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex + 1) % cardData[currentCardIndex].images.length
      );
      if (currentImageIndex === cardData[currentCardIndex].images.length - 1) {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, currentCardIndex]);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  const inputStyle =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6';

  return (
    <div className='mx-8 my-6 grid justify-center md:grid-cols-2 gap-4'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className='bg-gray-800 border border-gray-200'
        >
          <div className='relative w-full h-80 overflow-hidden'>
            {card.images.map((image, imgIndex) => (
              <img
                key={imgIndex}
                className={`absolute inset-0 w-full h-full object-cover ${
                  currentImageIndex === imgIndex
                    ? 'opacity-100 transition-opacity duration-1000 ease-in-out'
                    : 'opacity-0'
                }`}
                src={image}
                alt={`Image ${imgIndex}`}
              />
            ))}
          </div>
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {card.title}
            </h5>
            <p className='mb-3 font-light text-gray-700 dark:text-gray-300'>
              {card.content}
            </p>
            <button
              onClick={openDialog}
              className='inline-flex items-center rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-800 gap-2'
            >
              Book now
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      ))}
      {isDialogOpen && (
        <div className='mt-32 fixed inset-0 z-10 flex justify-center items-center bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-8 max-w-2xl rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4 text-red-500'>Book Now</h2>
            <form>
              {/* Add your form fields here */}
              <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='col-span-full'>
                  <label
                    htmlFor='full-name'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    Full Name
                  </label>
                  <div className='relative mt-2.5'>
                    <div className='absolute inset-y-0 left-0 flex items-center'>
                      <label htmlFor='full-name' className='sr-only'>
                        Full name
                      </label>
                      <select
                        id='full-name'
                        name='full-name'
                        className='cursor-pointer h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-600 sm:text-sm outline-none'
                      >
                        <option value='Mr'>Mr</option>
                        <option value='Mrs'>Mrs</option>
                        <option value='Miss'>Miss</option>
                      </select>
                    </div>
                    <input
                      type='tel'
                      name='full-name'
                      id='full-name'
                      autoComplete='name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='street-address'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Address
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='street-address'
                      id='street-address'
                      autoComplete='street-address'
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className='sm:col-span-2 sm:col-start-1'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    City
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='city'
                      id='city'
                      autoComplete='address-level2'
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='region'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    State
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='region'
                      id='region'
                      autoComplete='address-level1'
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='postal-code'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    PIN Code
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='postal-code'
                      id='postal-code'
                      autoComplete='postal-code'
                      className={inputStyle}
                    />
                  </div>
                </div>
              </div>
              <div className='flex justify-end mt-4'>
                <button
                  type='button'
                  onClick={closeDialog}
                  className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none'
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import test1 from '../../assets/images/products/zipSound/zs1.png';
// import test2 from '../../assets/images/products/zipSound/zs2.png';
// import test3 from '../../assets/images/products/zipSound/zs3.png';
// import test4 from '../../assets/images/products/zipSound/zs4.png';

// const cardData = [
//   {
//     title: 'Card 1',
//     content:
//       'Here is some content for card 1. You can customize it as needed.',
//     images: [test1, test2, test3, test4],
//   },
//   {
//     title: 'Card 2',
//     content:
//       'Here is some content for card 2. You can customize it as needed.',
//     images: [test4, test1, test4, test1],
//   },
//   {
//     title: 'Card 3',
//     content:
//       'Here is some content for card 2. You can customize it as needed.',
//     images: [test2, test1, test2, test1],
//   },
//   {
//     title: 'Card 4',
//     content:
//       'Here is some content for card 2. You can customize it as needed.',
//     images: [test2, test3, test4, test1],
//   },
// ];

// const ServicesCard = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cardData[currentCardIndex].images.length);
//       if (currentImageIndex === cardData[currentCardIndex].images.length - 1) {
//         setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [currentImageIndex, currentCardIndex]);

//   return (
//     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-8'>
//       {cardData.map((card, index) => (
//         <div
//           key={index}
//           className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
//         >
//           <img
//             className='rounded-t-lg'
//             src={card.images[currentImageIndex]}
//             alt=''
//           />
//           <div className='p-5'>
//             <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
//               {card.title}
//             </h5>
//             <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
//               {card.content}
//             </p>
//             <a
//               href='#'
//               className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
//             >
//               Book now
//               <FontAwesomeIcon icon={faArrowRight} />
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServicesCard;
