import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../timeline/timeline';
import InnovatorImg from '../../assets/images/Innovator/Innovator_img.png';

const HomeAboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className='container mx-auto m-8'>
      <h1 className='text-5xl font-bold text-center text-gray-800 my-10'>
        About Us
      </h1>

      <div className='flex flex-col justify-between lg:flex-row items-center md:m-4 lg:m-8'>
        <div
          className='relative w-96 md:w-2/3 lg:w-64 h-full rounded-tl-3xl rounded-br-3xl overflow-hidden'
          style={{ boxShadow: '10px 10px', padding: '0' }}
        >
          <img src={InnovatorImg} alt='The Innovator Img' />
        </div>
        <div className='lg:w-2/3 h-full m-8'>
          <div className='bg-gray-100 p-6 rounded-tr-3xl rounded-bl-3xl shadow-xl h-full'>
            <h3 className='font-semibold md:font-bold mb-4 lg:text-lg'>
              The Innovator:
            </h3>
            <p className='font-light'>
              L Lanu Jamir, an innovator and entrepreneur from Chümoukedima,
              Nagaland, is the visionary founder of Zip Engineering and
              Innovation Centre. His journey, marked by resilience and
              steadfastness, reflects a commitment to fostering electronic,
              mechanical, and electrical innovations.{' '}
            </p>
            <ul className='list-disc pl-6'>
              <li className='lg: mb-[-30px]'>
                Recognized ELC Technician by Asosiasi Hidro Bandung
              </li>
              <li className='lg: mb-[-30px]'>
                Recognized ELC Technician by ASEAN Hydropower Competence Centre
                (HYCOM)
              </li>
              <li className='lg: mb-[-30px]'>
                Represented Meghalaya State Basin Development Authority
              </li>
              <li className='lg: mb-[-30px]'>
              Represented Gram Vikas of India from Orrisa State, for the Hydro Empowerment Network from South and Southeast Asia in Indonesia
              </li>
              <li className='lg: mb-[-30px]'>
                Intellectual Property Right for ELC Design (2021)
              </li>
              <li className='lg: mb-[-10px]'>
                Featured Speaker at Nagaland CSR & Investment Conclave 2022
              </li>
            </ul>
            <Link
              to='/aboutus'
              className='text-red-600 hover:underline block mt-4'
              onClick={scrollToTop}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className='mb-20' />
      <Timeline />
    </div>
  );
};

export default HomeAboutUs;
