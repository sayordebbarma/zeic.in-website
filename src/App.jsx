import React from 'react'
import HomePage from './pages/home/HomePage.jsx';
import ProductsPage from './pages/products/ProductsPage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import ContactHeader from './components/contactHeader/ContactHeader';

function App(){
  return (
  <>
  <ContactHeader />
  <Navbar />
  {/* <HomePage/>
  <ProductsPage/>
  <ContactPage /> */}
  </>
  )
}

export default App