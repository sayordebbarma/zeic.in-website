import React from 'react'
import zeicLogo from '../../assets/images/logo/zeic_logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-4'>
      <div className='flex items-center'>
        <img className='h-24' src={zeicLogo} alt="zeic logo" />
        <h1 className='text-3xl font-bold'>ZEIC</h1>
      </div>
      <ul className="flex">
        <li>Home</li>
        <li>Products</li>
        <li>About us</li>
        <li>Career</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar