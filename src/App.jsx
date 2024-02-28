import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import ProductsPage from './pages/products/ProductsPage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import ContactHeader from './components/contactHeader/ContactHeader';

function App(){
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/"  element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App