import { useState } from 'react'
import zeicLogo from '../../assets/images/zeic_logo.png'
import React from 'react'
import './HomePage.css'

function HomePage(){
  return (
  <>
  <div>
    <img src={zeicLogo} className="logo" alt="Vite logo" />
  </div>
  <h1>zeic.in website</h1>
  </>
  )
}

export default HomePage