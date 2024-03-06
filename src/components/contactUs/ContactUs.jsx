import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip, faLocationDot,faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className="relative h-screen">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
      <div className="container px-20 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold text-gray-600 mb-10">Reach us at</h2>
          <div className="flex text-red-600">
          <FontAwesomeIcon icon={faLocationDot} className="mr-3" /> 
          <p className="text-gray-600 mb-4">
              Hno. 138, Lane-6, Aoyim Village <br/>
              Nuiland Road, 4th Mile Chümoukedima <br/>
              Nagaland : 797115
              </p>
          </div>
          
          <div className="flex text-red-600">
            <FontAwesomeIcon icon={faPhoneFlip} className="mr-3" /> 
            <p className="text-gray-600 mb-4">
              +91 7005521094 <br />
              +91 9402696843
          </p>
          </div>

          <div className="flex text-red-600">
            <FontAwesomeIcon icon={faPaperPlane} className="mr-3" /> 
            <p className="text-gray-600 mb-4">
            <span>example@email.com</span>
          </p>
          </div>
          </div>
        <div className="lg:w-1/2 md:w-full sm:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 mt-6 md:mt-0">
          <div className="relative mb-4">
          <label htmlFor="firstName" className="leading-7 text-sm text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
          <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
          <label htmlFor="phoneNumber" className="leading-7 text-sm text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 transition duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
