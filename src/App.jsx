import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import ProductsPage from './pages/products/ProductsPage';
import Services from './pages/services/Services';
import AboutUsPage from './pages/aboutUs/AboutUsPage';
import CareerPage from './pages/career/CareerPage';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/services' element={<Services />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/career' element={<CareerPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
