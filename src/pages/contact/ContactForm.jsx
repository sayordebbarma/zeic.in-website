import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneFlip,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
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

  const validatePhoneNumber = (inputPhoneNumber) => {
    // Regular expression pattern for xxx-xxx-xxxx format
    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
    return phoneNumberPattern.test(inputPhoneNumber);
  };
  
  const inputStyle =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6';
  return (
    <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-full  text-center'>
        {/* <div className='mt-2 text-lg leading-8 text-gray-600'>
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </div> */}
        <div className='mt-2 text-gray-600 flex flex-row justify-evenly'>
          <ContactInfo
            icon={faLocationDot}
            text={
              <>
                Hno. 138, Lane-6, Aoyim Village Nuiland Road,
                <br />
                4th Mile Chümoukedima Nagaland : 797115
              </>
            }
          />
          <ContactInfo
            icon={faPhoneFlip}
            text={
              <>
                +91 7005521094 <br /> +91 9402696843
              </>
            }
          />
          <ContactInfo
            icon={faEnvelope}
            text={<span>example@email.com</span>}
          />
        </div>
      </div>

      <form
        action='#'
        method='POST'
        className='mx-auto mt-16 max-w-xl sm:mt-20'
      >
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label
              htmlFor='first-name'
              className='block text-sm font-semibold leading-6 text-gray-900'
            >
              First name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className={inputStyle}
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
                name='last-name'
                id='last-name'
                autoComplete='family-name'
                className={inputStyle}
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
                name='phone-number'
                id='phone-number'
                autoComplete='tel'
                className={inputStyle}
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
              />
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <button
            type='submit'
            className='block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-800'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
