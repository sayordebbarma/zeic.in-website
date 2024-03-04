import React from 'react'
import Navbar from '../navbar/Navbar';
import homebg from '../../assets/images/background/homebg.png';

const heroSection = () => {
  return (
    <div className='w-full relative h-screen'>
      <Navbar />
      <img className='w-full h-full object-cover'src={homebg} alt="" />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
      <div className='absolute top-1/2 transform -translate-y-1/2 w-full text-center text-white'>
        <h1 className='font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl'>ZIP ENGINEERING<br/>&<br/>INNOVATION CENTRE</h1>
        <p className='text-sm md:text-base lg:text-lg italic font-thin m-3'>An “All In One” centre with Innovation, Sustainability<br/> and Development zipped under one roof</p>
      </div>
    </div>
  )
}

export default heroSection