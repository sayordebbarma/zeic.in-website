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
        <div className='md:w-2/3 h-full md:ml-8'>
          <div className='bg-gray-100 p-6 rounded-tr-3xl rounded-bl-3xl shadow-xl h-full'>
            <h3 className='font-bold mb-4 text-lg'>The Innovator:</h3>
            <p className='font-light'>
            L Lanu Jamir, an innovator and entrepreneur from Chümoukedima, Nagaland, is the visionary founder of Zip Engineering and Innovation Centre. His journey, marked by resilience and steadfastness, reflects a commitment to fostering electronic, mechanical, and electrical innovations.             </p>
            <ul className='list-disc pl-6 leading-3 mt-2'>
              <li style={{ marginBottom: '-1rem' }}>Recognized ELC Technician by Asosiasi Hidro Bandung</li>
              <li style={{ marginBottom: '-1rem' }}>Recognized ELC Technician by ASEAN Hydropower Competence Centre (HYCOM)</li>
              <li style={{ marginBottom: '-1rem' }}>Represented Meghalaya State Basin Development Authority</li>
              <li style={{ marginBottom: '-1rem' }}>Intellectual Property Right for ELC Design (2021)</li>
              <li style={{ marginBottom: '-1rem' }}>Featured Speaker at Nagaland CSR & Investment Conclave 2022</li>
            </ul>
            <Link to='/about-us' className='text-red-600 hover:underline block mt-4'>
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-20" />
      <Timeline/>
    </div>
  );
};

export default HomeAboutUs;
