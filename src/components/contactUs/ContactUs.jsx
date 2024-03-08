import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = ({ icon, text }) => {
  return (
    <div className="flex items-center text-red-600">
      <FontAwesomeIcon icon={icon} className="mr-3" style={{ marginTop: "-14px" }} />
      <p className="text-gray-600 mb-4">{text}</p>
    </div>
  );
};

const ContactUsCopy = () => {

  return (
    <div className="relative h-full">
      <h1 className="text-5xl font-bold text-center text-gray-800 my-10">Contact Us</h1>
      
      <div className="container px-20 pb-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold text-red-600 mb-10">Reach us at</h2>
          <div>
            <ContactInfo icon={faLocationDot}
            text={
            <>
            Hno. 138, Lane-6, Aoyim Village <br />
            Nuiland Road, 4th Mile Chümoukedima <br />
            Nagaland : 797115
            </>}
              />
              <ContactInfo icon={faPhoneFlip}
              text={
              <> 
              +91 7005521094 <br /> +91 9402696843
              </>}
              />
              <ContactInfo icon={faEnvelope}
              text={<span>example@email.com</span>}/>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-6 md:mt-0">
          <form action="#" method="POST" className="max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-600">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-600">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-600">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-600">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-600">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6 resize-none"
                    defaultValue={''}/>
                </div>
              </div>
              </div>
            <div className="mt-6">
              <button
                type="submit"
                className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCopy;
