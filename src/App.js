import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CookieConsent from './Components/CookieConsent';
import TawkTo from './Components/Tawkto';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Newsletter from './Components/Newsletter';
import FAQ from './Components/FAQ';
import Bags from './Components/Bags';

function App() {
  return (

    <div>
      <CookieConsent />
      <TawkTo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/bags" element={<Bags />}></Route>
      </Routes>
      <Newsletter />
      <Footer />
    </div>

  )
}

export default App;