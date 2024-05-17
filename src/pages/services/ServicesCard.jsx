import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { Dialog } from '@headlessui/react';

import sound1 from '../../assets/images/services/soundSystem/Sound1.png';
import sound2 from '../../assets/images/services/soundSystem/Sound2.png';
import sound3 from '../../assets/images/services/soundSystem/Sound3.png';
import sound4 from '../../assets/images/services/soundSystem/Sound4.png';
import stage1 from '../../assets/images/services/stage/Stage1.png';
import stage2 from '../../assets/images/services/stage/Stage2.png';
import stage3 from '../../assets/images/services/stage/Stage3.png';
import stage4 from '../../assets/images/services/stage/Stage4.png';
import Generator1 from '../../assets/images/services/generator/Generator1.png';
import Generator2 from '../../assets/images/services/generator/Generator2.png';
import Generator3 from '../../assets/images/services/generator/Generator3.png';
import Generator4 from '../../assets/images/services/generator/Generator4.png';
import course1 from '../../assets/images/services/courses/Course1.png';
import course2 from '../../assets/images/services/courses/Course2.png';
import course3 from '../../assets/images/services/courses/Course3.png';
import course4 from '../../assets/images/services/courses/Course4.png';

const cardData = [
  {
    title: 'Sound System Rental',
    content: 'Range: Upto 1 Lakh W',
    images: [sound1, sound2, sound3, sound4],
  },
  {
    title: 'Stage Rental',
    content: 'Range: Upto 16,000 sq. ft',
    images: [stage1, stage2, stage3, stage4],
  },
  {
    title: 'Generator Rental',
    content: 'Range: 5-100 kVA',
    images: [Generator1, Generator2, Generator3, Generator4],
  },
  {
    title: 'Audio Engineering Course',
    content:
      'Courses for Mixing, Equilization, Power Distribution, Amp class division and many more...',
    images: [course1, course2, course3, course4],
  },
];

const ServicesCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      service_type: formData.serviceType,
      name: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      date: formData.dateTime,
      duration: formData.duration,
      location: formData.location,
      message: formData.requirements,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_SERVICES_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log(
            'Email successfully sent!',
            response.status,
            response.text
          );
          setSubmitted(true);
        },
        (error) => {
          console.error('Failed to send email:', error);
          setSubmitError('Failed to submit the form. Please try again later.');
        }
      );
  };

  const inputStyle =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6';

  return (
    <div className='mx-8 my-8 grid justify-center md:grid-cols-2 gap-4'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className='bg-gray-100 border border-gray-100 shadow-xl'
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
                      className={inputStyle}
                      onChange={handleChange}
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
                      className={inputStyle}
                      onChange={handleChange}
                      value={formData.fullName}
                      required
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
                      onChange={handleChange}
                      value={formData.email}
                      required
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
                      onChange={handleChange}
                      value={formData.phoneNumber}
                      required
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
                      onChange={handleChange}
                      value={formData.dateTime}
                      required
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
                      onChange={handleChange}
                      value={formData.duration}
                      required
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
                      onChange={handleChange}
                      value={formData.location}
                      required
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
                      onChange={handleChange}
                      value={formData.requirements}
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

          {/* Dialog pop-up for submit message */}
          <Dialog
            open={submitted}
            onClose={() => setSubmitted(false)}
            className='fixed inset-0 z-50 overflow-y-auto'
          >
            <div className='fixed inset-0 z-0 bg-black opacity-50'></div>{' '}
            {/* Overlay */}
            <div className='flex justify-center items-center min-h-screen'>
              <div className='bg-white border border-gray-300 rounded-lg p-8 max-w-md w-full z-10'>
                <Dialog.Title className='text-2xl font-bold text-red-500 mb-4'>
                  Submitted Successfully!
                </Dialog.Title>
                <p className='text-gray-600'>
                  Thank you for reaching out to us. We will get back to you
                  soon.
                </p>
                <button
                  className='block w-full bg-red-600 text-white font-semibold py-3 mt-6 rounded-md shadow-sm hover:bg-red-800'
                  onClick={() => setSubmitted(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default ServicesCard;
