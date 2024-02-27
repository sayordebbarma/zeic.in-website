import React from 'react'

const ContactHeader = () => {
  return (
    <div className='bg-blue-950 opacity-90 flex justify-between px-4 py-2'>
      <a className='text-white underline ml-6' href="mailto: example@example.com">example@example.com</a>
      <a className='bg-blue-600 hover:bg-blue-500 text-white p-1 rounded mr-6' href="tel:+1234567890">Call now</a>
    </div>
  )
}

export default ContactHeader