import React, { useState, useEffect } from 'react'
import zeicLogo from '../../assets/images/logo/zeic_logo.png'
import NavLinks from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


{/* <FontAwesomeIcon icon={faBars} /> 
<FontAwesomeIcon icon={faXmark} />*/}
const Navbar = () => {
  const [color, setColor] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);


  return (
    <div className={`w-full px-4 fixed top-12 z-20 ${color ? 'bg-gray-800 bg-opacity-50' : 'bg-transparent'}`}>
        <div className='flex justify-between items-center w-11/12 h-20 m-auto text-white'>
          <div className='flex items-center'>
            <img className='h-20' src={zeicLogo} alt="zeic logo" />
            <h1 className='text-3xl font-bold ml-2'>ZEIC</h1>
          </div>
          <div>
            <NavLinks />
          </div>
        </div>
    </div>
  )
}

export default Navbar