import React from 'react'
import { Link } from 'react-router-dom'

const ContactHeader = () => {
  return (
    <div className='bg-gray-800 flex justify-between px-4 py-2 fixed top-0 left-0 right-0 z-30'>
      <a className='text-white underline ml-6' href="mailto: sayor8543@gmail.com">sayor8543@gmail.com</a>
      <a className='bg-red-600 hover:bg-red-800 text-white py-1 px-2 rounded mr-6' href="tel:+1234567890">Call now</a>
    </div>
  )
}

export default ContactHeader