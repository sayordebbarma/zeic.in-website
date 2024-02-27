import React from 'react'
import homebg from '../../assets/images/background/homebg.png'
import './HomePage.css'

function HomePage(){
  return (
  <div className='w-full relative'>
    <img className='w-full h-full object-cover'src={homebg} alt="" />
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
    <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
      <h1 className='font-extrabold	text-9xl'>ZIP ENGINEERING<br/>&<br/>INNOVATION CENTRE</h1>
      <p className='text-sm italic font-thin'>An “All In One” centre with Innovation, Sustainability<br/> and Development zipped under one roof</p>
    </div>
  </div>
  )
}

export default HomePage