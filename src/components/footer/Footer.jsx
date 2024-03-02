import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip, faLocationDot,faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container px-6 py-12 mx-auto'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4'>
            <div className='font-light sm:col-span-2'>
                <h1 className='max-w-lg text-xl font-semibold tracking-tight xl:text-2xl'>Zip Engineering<br/>&<br/>Innovation Centre</h1>
                <p className='mt-5 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <p><FontAwesomeIcon icon={faPhoneFlip} /> +91 123456789</p>
                <p><FontAwesomeIcon icon={faPaperPlane} /> example@email.com</p>
            </div>

            <div>
                <p className='font-semibold text-white'>Quick Link</p>
                <div className='flex flex-col items-start mt-5 space-y-2'>
                    
                    <Link className='transition-colors duration-300 text-gray-300 hover:cursor-pointer hover:text-blue-500'>Products</Link>
                    <Link className='transition-colors duration-300 text-gray-300 hover:cursor-pointer hover:text-blue-500'>About Us</Link>
                    <Link className='transition-colors duration-300 text-gray-300 hover:cursor-pointer hover:text-blue-500'>Career</Link>
                    <Link className='transition-colors duration-300 text-gray-300 hover:cursor-pointer hover:text-blue-500'>Contacts</Link>
                </div>
            </div>

            <div>
                <p className='font-semibold text-white'>Location</p>

                <div style={{ width: '100%' }} className='mt-5'>
                  <iframe 
                  width='200' 
                  height='200' 
                  frameborder='0' 
                  scrolling='no' 
                  marginheight='0' 
                  marginwidth='0'
                  src='https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=near&amp;output=embed'></iframe>
                </div>
                <div className='mt-3 font-light'>
                  <p><FontAwesomeIcon icon={faLocationDot} /> Chümukedima, Nagaland</p>
                </div>
            </div>
        </div>
        
        <hr className='my-6 md:my-8 border-white h-1' />
        <p className='p-8 font-light text-start md:text-center md:text-sm md:p-4'>&copy; {currentYear} Zip Engineering & Innovation Centre. All rights reserved.</p>
      </div>
</footer>
  )
}

export default Footer