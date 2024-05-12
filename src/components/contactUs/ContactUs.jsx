import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Dialog } from '@headlessui/react';

const ContactInfo = ({ icon, text }) => {
  return (
    <div className='flex items-center text-red-600'>
      <FontAwesomeIcon
        icon={icon}
        className='mr-3'
        style={{ marginTop: '-14px' }}
      />
      <p className='text-gray-600 mb-4'>{text}</p>
    </div>
  );
};

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:500/send-email',
        formData
      );
      console.log('Email response:', response.data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('Failed to submit the form. Please try again later.');
    }
  };
  

  const validatePhoneNumber = (inputPhoneNumber) => {
    // Regular expression pattern for 10-digit phone number
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(inputPhoneNumber);
  };

  const inputStyle =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6';

  return (
    <div className='relative h-full'>
      <h1 className='text-5xl font-bold text-center text-gray-800 my-10'>
        Contact Us
      </h1>

      <div className='container px-20 pb-10 mx-auto flex sm:flex-nowrap flex-wrap'>
        <div className='lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-6 md:mt-0'>
          <h2 className='text-4xl font-bold text-red-600 mb-10'>Reach us at</h2>
          <div>
            <ContactInfo
              icon={faLocationDot}
              text={
                <>
                  Hno. 138, Lane-6, Aoyim Village <br />
                  Nuiland Road, 4th Mile Chümoukedima <br />
                  Nagaland : 797115
                </>
              }
            />
            <ContactInfo
              icon={faPhone}
              text={
                <>
                  +91 7005521094 <br /> +91 9402696843
                </>
              }
            />
            <ContactInfo
              icon={faEnvelope}
              text={<span>info@zeic.in</span>}
            />
          </div>
        </div>

        <div className='lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-6 md:mt-0'>
          <form onSubmit={handleSubmit} className='max-w-xl'>
            <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  First name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    autoComplete='given-name'
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Last name
                </label>
                <div className='mt-2.5'>
                  <input
                    type='text'
                    name='lastName'
                    id='last-name'
                    autoComplete='family-name'
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Email
                </label>
                <div className='mt-2.5'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='phone-number'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Phone number
                </label>
                <div className='relative mt-2.5'>
                  <input
                    type='tel'
                    name='phoneNumber'
                    id='phone-number'
                    autoComplete='tel'
                    className={inputStyle}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold leading-6 text-gray-900'
                >
                  Message
                </label>
                <div className='mt-2.5'>
                  <textarea
                    name='message'
                    id='message'
                    rows={4}
                    className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 resize-none'
                    defaultValue={''}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='block w-full bg-red-600 text-white py-3 px-4 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
              >
                Submit
              </button>
              {submitError && (
                <p className='text-red-500 text-sm mt-1'>{submitError}</p>
              )}
            </div>
          </form>
        </div>
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
              Thank you for reaching out to us. We will get back to you soon.
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
  );
};

export default ContactUs;
