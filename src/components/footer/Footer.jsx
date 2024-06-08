import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import zeicLogo from '../../assets/images/logo/zeic_logo.png';
import CompanyLocation from '../CompanyLocation';

const Footer = ({ productRefs }) => {
  const currentYear = new Date().getFullYear();
  const linkStyle =
    'transition-colors duration-300 text-gray-300 hover:cursor-pointer hover:text-red-500';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProduct = (productId) => {
    const productRef = productRefs[productId - 1];
    if (productRef && productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container px-6 pt-12 mx-auto'>
        <div className='grid grid-cols-2 gap-6 sm:gap-y-10 lg:grid-cols-6'>
          <div className='font-light col-span-2'>
            <img
              className='h-20 lg:mx-[-20px]'
              src={zeicLogo}
              alt='zeic logo'
            />
            <h1 className='max-w-lg text-xl font-semibold tracking-tight xl:text-2xl'>
              Zip Engineering
              <br />&<br />
              Innovation Centre
            </h1>
            <p className='my-3'>
              An “All In One” centre with Innovation,
              <br /> Sustainability and Development zipped
              <br /> under one roof
            </p>
          </div>
          <div className='lg:mx-[-50px]'>
            <p className='font-semibold text-white'>Quick Link</p>
            <div className='flex flex-col items-start mt-5 space-y-2'>
              <Link to='/' className={linkStyle} onClick={scrollToTop}>
                Home
              </Link>
              <Link to='/aboutus' className={linkStyle} onClick={scrollToTop}>
                About Us
              </Link>
              <Link to='/products' className={linkStyle} onClick={scrollToTop}>
                Products
              </Link>
              <Link to='/services' className={linkStyle} onClick={scrollToTop}>
                Services
              </Link>
              <Link to='/career' className={linkStyle} onClick={scrollToTop}>
                Career
              </Link>
              <Link to='/contact' className={linkStyle} onClick={scrollToTop}>
                Contact
              </Link>
            </div>
          </div>
          <div className='lg:mx-[-50px]'>
            <p className='font-semibold text-white'>Products</p>
            <div className='flex flex-col items-start mt-5 space-y-2'>
              <Link to='/products' className={linkStyle} onClick={scrollToTop}>
                Zip Sound
              </Link>
              <Link to='/products' className={linkStyle} onClick={scrollToTop}>
                CNC Woodwork
              </Link>
              <Link to='/products' className={linkStyle} onClick={scrollToTop}>
                ELC
              </Link>
              <Link to='/products' className={linkStyle} onClick={scrollToTop}>
                Servo Stabilizer
              </Link>
            </div>
          </div>
          <div className='lg:mx-[-50px]'>
            <p className='font-semibold text-white'>Services</p>
            <div className='flex flex-col items-start mt-5 space-y-2'>
              <Link to='/services' className={linkStyle} onClick={scrollToTop}>
                Sound System Rental
              </Link>
              <Link to='/services' className={linkStyle} onClick={scrollToTop}>
                Stage Rental
              </Link>
              <Link to='/services' className={linkStyle} onClick={scrollToTop}>
                Generator Rental
              </Link>
              <Link to='/services' className={linkStyle} onClick={scrollToTop}>
                Courses
              </Link>
            </div>
          </div>
          <div className='lg:mx-[-50px] col-span-2 md:col-span-1'>
            <p className='font-semibold text-white'>Contact Us</p>

            {/* Map location of the company */}
            <CompanyLocation />

            <div className='flex flex-col mt-3 font-light'>
              <p className='flex mt-3 font-light items-center'>
                <FontAwesomeIcon className='mr-3' icon={faLocationDot} />
                Hno. 138, Lane-6, Aoyim Village <br />
                Nuiland Road, 4th Mile <br />
                Chümoukedima, Nagaland : 797115
              </p>
              <p className='flex mt-3 font-light items-center'>
                <FontAwesomeIcon className='mr-3' icon={faPhone} />
                +91 7005521094 / +91 9402696843
              </p>
              <p className='flex mt-3 font-light items-center'>
                <FontAwesomeIcon className='mr-3' icon={faEnvelope} />{' '}
                info@zeic.in
              </p>
            </div>
          </div>
        </div>

        <hr className='my-2 mt-6 border-white h-1' />
        <div className='flex flex-col md:flex-row justify-between py-4 font-light text-start md:text-center md:text-sm md:p-4'>
          <p className='mb-2'>
            &copy; {currentYear} Zip Engineering & Innovation Centre. All rights
            reserved.
          </p>
          <p>
            Designed by{' '}
            <Link
              to='https://github.com/sayordebbarma'
              target='blank'
              className='underline text-red-600 hover:text-red-700'
            >
              Sayor Debbarma
            </Link>{' '}
            &{' '}
            <Link
              to='https://github.com/tushienla'
              target='blank'
              className='underline text-red-600 hover:text-red-700'
            >
              Tushienla Jamir
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
