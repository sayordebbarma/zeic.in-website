import React from 'react'
import homebg from '../../assets/images/background/homebg.png'
import './HomePage.css'
import HomeAboutUs from '../../components/HomeAboutUs/HomeAboutUs'
import Navbar from '../../components/navbar/Navbar';
import ContactHeader from '../../components/contactHeader/ContactHeader';

function HomePage(){
  return (
    <>
    <ContactHeader />
    <div className='w-full relative h-screen'>
    <Navbar />
    <img className='w-full h-full object-cover'src={homebg} alt="" />
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
    <div className='absolute top-1/2 transform -translate-y-1/2 w-full text-center text-white'>
      <h1 className='font-extrabold	text-8xl'>ZIP ENGINEERING<br/>&<br/>INNOVATION CENTRE</h1>
      <p className='text-sm italic font-thin m-3'>An “All In One” centre with Innovation, Sustainability<br/> and Development zipped under one roof</p>
    </div>
    <HomeAboutUs />
  </div></>
  )
}

export default HomePage