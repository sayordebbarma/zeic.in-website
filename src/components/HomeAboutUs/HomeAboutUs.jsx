import React from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../timeline/timeline';
import InnovatorImg from '../../assets/images/Innovator/Innovator_img.png'


const HomeAboutUs = () => {
  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-5xl font-bold text-center text-gray-800 mb-8'>About Us</h1>
      <div className='flex flex-col justify-center md:flex-row items-center'>
        <div className='relative md:w-1/5 h-full rounded-tl-3xl rounded-br-3xl overflow-hidden' style={{ boxShadow: '10px 10px', padding: '0' }}>
          <img
            src={InnovatorImg}
            alt="The Innovator Img"
          />
        </div>
        <div className='md:w-2/3 md:ml-8'>
          <div className='bg-gray-100 p-6 rounded-tr-3xl rounded-bl-3xl shadow-xl'>
            <h3 className='font-bold mb-4 text-lg'>The Innovator:</h3>
            <p className='font-light'>
              Recognized ELC Technician by Asosiasi Hidro Bandung. Recognized ELC Technician by ASEAN Hydropower Competence Centre (HYCOM). Representative for Meghalaya State Basin Development Authority. Represented Gram Vikas of India from Orrisa State, for the Hydro Empowerment Network from South and Southeast Asia in Indonesia. Speaker at Nagaland CSR & Investment Conclave 2022.
            </p>
            <Link to='/about-us' className='text-red-600 hover:underline block mt-4'>
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <Timeline/>
    </div>
  );
};

export default HomeAboutUs;
