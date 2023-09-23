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
import Jewelry from './Components/Jewelry';
import Shoes from './Components/Shoes';
import OurBrands from './Components/OurBrands';
import Aeliana from './Components/Aeliana';
import Arya from './Components/Arya';
import Calliope from './Components/Calliope';
import Cassia from './Components/Cassia';
import Dracarys from './Components/Dracarys';
import Gwenore from './Components/Gwenore';
import Sansa from './Components/Sansa';
import Daenarys from './Components/Daenarys';

function App() {
  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/bags" element={<Bags />}></Route>
        <Route path="/jewelry" element={<Jewelry />}></Route>
        <Route path="/shoes" element={<Shoes />}></Route>
        <Route path="/our-brands" element={<OurBrands />}></Route>
        <Route path="/aeliana" element={<Aeliana />}></Route>
        <Route path="/arya" element={<Arya />}></Route>
        <Route path="/calliope" element={<Calliope />}></Route>
        <Route path="/cassia" element={<Cassia />}></Route>
        <Route path="/dracarys" element={<Dracarys />}></Route>
        <Route path="/gwenore" element={<Gwenore />}></Route>
        <Route path="/sansa" element={<Sansa />}></Route>
        <Route path="/daenarys" element={<Daenarys />}></Route>
      </Routes>
      <Newsletter />
      <Footer />
      <CookieConsent />
      <TawkTo />
    </div>

  )
}

export default App;