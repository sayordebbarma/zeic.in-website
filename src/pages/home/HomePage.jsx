import React from 'react'
import zeicLogo from '../../assets/images/logo/zeic_logo.png'
import homebg from '../../assets/images/background/homebg.png'
import './HomePage.css'

function HomePage(){
  return (
  <>
  <div>
  <img src={homebg} />
    <img src={zeicLogo} className="logo" alt="Vite logo" />
  </div>
  <h1>zeic.in website</h1>
  </>
  )
}

export default HomePage