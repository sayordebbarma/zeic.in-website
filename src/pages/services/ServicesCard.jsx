import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

import sound1 from '../../assets/images/services/soundSystem/Sound1.png';
import sound2 from '../../assets/images/services/soundSystem/Sound2.png';
import sound3 from '../../assets/images/services/soundSystem/Sound3.png';
import sound4 from '../../assets/images/services/soundSystem/Sound4.png';
import stage1 from '../../assets/images/services/stage/Stage1.png';
import stage2 from '../../assets/images/services/stage/Stage2.png';
import stage3 from '../../assets/images/services/stage/Stage3.png';
import stage4 from '../../assets/images/services/stage/Stage4.png';
import course1 from '../../assets/images/services/courses/Course1.png';
import test1 from '../../assets/images/products/zipSound/zs2.png';
import test2 from '../../assets/images/products/zipSound/zs2.png';
import test3 from '../../assets/images/products/zipSound/zs3.png';
import test4 from '../../assets/images/products/zipSound/zs4.png';

const cardData = [
  {
    title: 'Sound System Rental',
    content: 'Here is some content for card 1. You can customize it as needed.',
    images: [sound1, sound2, sound3, sound4],
  },
  {
    title: 'Stage Rental',
    content: 'Here is some content for card 2. You can customize it as needed.',
    images: [stage1, stage2, stage3, stage4],
  },
  {
    title: 'Generator Rental',
    content: 'Range: 5-100 kVA',
    images: [test3, test2, test4, test1],
  },
  {
    title: 'Audio Engineering Course',
    content: 'Here is some content for card 4. You can customize it as needed.',
    images: [course1],
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

  const openDialog = (index) => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // ------------form section--------------

  const [formData, setFormData] = useState({
    serviceType: '',
    dateTime: '',
    duration: '',
    location: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    requirements: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const inputStyle =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6';

  return (
    <div className='mx-8 my-6 grid justify-center md:grid-cols-2 gap-4'>
      {cardData.map((card, index) => (
        <div key={index} className='bg-gray-100 border border-gray-200'>
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
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-red-600 '>
              {card.title}
            </h5>
            <p className='mb-3 font-light text-black'>{card.content}</p>
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
        <div className='mt-32 fixed inset-0 z-10 flex justify-center items-center overflow-y-auto bg-gray-900 bg-opacity-50'>
          <div className='bg-white p-8 mt-32 max-h-92 rounded-lg'>
            <div className='flex justify-between items-center mb-4'>
              <h2 className='text-2xl font-bold text-red-500'>Book Now</h2>
              <button
                onClick={closeDialog}
                className='px-3 py-2 text-gray-900 rounded-full hover:bg-gray-200 focus:outline-none'
              >
                <FontAwesomeIcon icon={faTimes} className='size-6' />
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              style={{ maxHeight: '80vh', overflowY: 'auto' }}
            >
              <div className='grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3'>
                <div className='col-span-full'>
                  <label
                    htmlFor='service'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Service Type
                  </label>
                  <div className='mt-2.5'>
                    <select
                      id='service'
                      name='serviceType'
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={inputStyle}
                    >
                      <option value='' disabled selected>
                        Select the service
                      </option>
                      {cardData.map((card, index) => (
                        <option key={index} value={card.title}>
                          {card.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='col-span-full'>
                  <label
                    htmlFor='fullName'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Full Name
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      id='fullName'
                      name='fullName'
                      onChange={handleChange}
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div className='col-span-full'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Email
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div className='col-span-full'>
                  <label
                    htmlFor='phoneNumber'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Phone Number
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='tel'
                      id='phoneNumber'
                      name='phoneNumber'
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div className='col-span-2'>
                  <label
                    htmlFor='dateTime'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Date and Time
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='datetime-local'
                      id='dateTime'
                      name='dateTime'
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div className='col-span-1'>
                  <label
                    htmlFor='duration'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Duration
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      id='duration'
                      name='duration'
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div className='col-span-full'>
                  <label
                    htmlFor='location'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Location
                  </label>
                  <div className='mt-2.5'>
                    <input
                      type='text'
                      id='location'
                      name='location'
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div className='col-span-full'>
                  <label
                    htmlFor='requirements'
                    className='block text-sm font-medium text-gray-900'
                  >
                    Additional Requirements
                  </label>
                  <div className='mt-2.5'>
                    <textarea
                      id='requirements'
                      name='requirements'
                      rows='3'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 resize-none'
                      defaultValue={''}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='flex justify-end mt-4'>
                <button
                  type='submit'
                  className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none'
                >
                  Submit
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

{
  /* <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='serviceType'
                  className='block text-sm font-medium text-gray-900'
                >
                  Service Type
                </label>
                <select
                  id='serviceType'
                  name='serviceType'
                  className={inputStyle}
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value=''>Select Service Type</option>
                  <option value='Sound System Rental'>
                    Sound System Rental
                  </option>
                  <option value='Stage Rental'>Stage Rental</option>
                  <option value='Generator Rental'>Generator Rental</option>
                  <option value='Audio Engineering Course'>
                    Audio Engineering Course
                  </option>
                </select>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='fullName'
                  className='block text-sm font-medium text-gray-900'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  className={inputStyle}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='phoneNumber'
                  className='block text-sm font-medium text-gray-900'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phoneNumber'
                  name='phoneNumber'
                  className={inputStyle}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='dateTime'
                  className='block text-sm font-medium text-gray-900'
                >
                  Date and Time
                </label>
                <input
                  type='datetime-local'
                  id='dateTime'
                  name='dateTime'
                  className={inputStyle}
                  value={formData.dateTime}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='duration'
                  className='block text-sm font-medium text-gray-900'
                >
                  Duration
                </label>
                <input
                  type='text'
                  id='duration'
                  name='duration'
                  className={inputStyle}
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='location'
                  className='block text-sm font-medium text-gray-900'
                >
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  className={inputStyle}
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='requirements'
                  className='block text-sm font-medium text-gray-900'
                >
                  Additional Requirements
                </label>
                <textarea
                  id='requirements'
                  name='requirements'
                  className={inputStyle}
                  value={formData.requirements}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <input
                  type='checkbox'
                  id='agreeTerms'
                  name='agreeTerms'
                  className='mr-2'
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                />
                <label
                  htmlFor='agreeTerms'
                  className='text-sm font-medium text-gray-900'
                >
                  I agree to the terms and conditions
                </label>
              </div>

              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none'
                >
                  Submit
                </button>
              </div>
            </form> */
}
{
  /* <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='serviceType'
                  className='block text-sm font-medium text-gray-900'
                >
                  Service Type
                </label>
                <select
                  id='serviceType'
                  name='serviceType'
                  className={inputStyle}
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value=''>Select Service Type</option>
                  <option value='Sound System Rental'>
                    Sound System Rental
                  </option>
                  <option value='Stage Rental'>Stage Rental</option>
                  <option value='Generator Rental'>Generator Rental</option>
                  <option value='Audio Engineering Course'>
                    Audio Engineering Course
                  </option>
                </select>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='dateTime'
                  className='block text-sm font-medium text-gray-900'
                >
                  Date and Time
                </label>
                <input
                  type='datetime-local'
                  id='dateTime'
                  name='dateTime'
                  className={inputStyle}
                  value={formData.dateTime}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='duration'
                  className='block text-sm font-medium text-gray-900'
                >
                  Duration
                </label>
                <input
                  type='text'
                  id='duration'
                  name='duration'
                  className={inputStyle}
                  placeholder='E.g., 2 days'
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='location'
                  className='block text-sm font-medium text-gray-900'
                >
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  name='location'
                  className={inputStyle}
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='fullName'
                  className='block text-sm font-medium text-gray-900'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  className={inputStyle}
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4 col-span-full'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='phoneNumber'
                  className='block text-sm font-medium text-gray-900'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phoneNumber'
                  name='phoneNumber'
                  className={inputStyle}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='requirements'
                  className='block text-sm font-medium text-gray-900'
                >
                  Additional Requirements
                </label>
                <textarea
                  id='requirements'
                  name='requirements'
                  rows='4'
                  className={`${inputStyle} resize-none`}
                  value={formData.requirements}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className='mb-4'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    name='agreeTerms'
                    className='form-checkbox h-4 w-4 text-red-500'
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <span className='ml-2 text-sm text-gray-900'>
                    I agree to the terms and conditions
                  </span>
                </label>
              </div>

              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none'
                >
                  Submit
                  <FontAwesomeIcon icon={faArrowRight} className='ml-2' />
                </button>
              </div>
            </form> */
}
{
  /* <form onsubmit={handleSubmit}>
              <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <label htmlFor='service' className='block text-sm font-medium text-gray-900'>
                  Select Service
                </label>
                <select id='service' name='service' className={inputStyle}>
                  {cardData.map((card, index) => (
                    <option key={index} value={card.title}>
                      {card.title}
                    </option>
                  ))}
                </select>
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
                    </div>
                    <input
                      type='tel'
                      name='full-name'
                      id='full-name'
                      autoComplete='name'
                      className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6'
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
                  type='submit'
                  className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none'
                >
                  Submit
                </button>
              </div>
            </form> */
}
