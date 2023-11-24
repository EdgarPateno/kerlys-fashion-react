import React from "react";
import { Routes, Route } from "react-router-dom";
import CookieConsent from "./Components/CookieConsent";
import TawkTo from "./Components/Tawkto";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Newsletter from "./Components/Newsletter";
import FAQ from "./Components/FAQ";
import Bags from "./Components/Bags";
import Jewelry from "./Components/Jewelry";
import Shoes from "./Components/Shoes";
import OurBrands from "./Components/OurBrands";
import Aeliana from "./Components/Aeliana";
import Arya from "./Components/Arya";
import Calliope from "./Components/Calliope";
import Cassia from "./Components/Cassia";
import Dracarys from "./Components/Dracarys";
import Gwenore from "./Components/Gwenore";
import Sansa from "./Components/Sansa";
import Daenarys from "./Components/Daenarys";
import Catelyn from "./Components/Catelyn";
import Cersei from "./Components/Cersei";
import Baelish from "./Components/Baelish";
import Lysa from "./Components/Lysa";
import Arryn from "./Components/Arryn";
import Osha from "./Components/Osha";
import LVBags from "./Components/LVBags";
import Yara from "./Components/Yara";
import Ygritte from "./Components/Ygritte";
import Margaery from "./Components/Margaery";
import Brienne from "./Components/Brienne";
import Shae from "./Components/Shae";
import Ros from "./Components/Ros";
import Melisandre from "./Components/Melisandre";
import Greyjoy from "./Components/Greyjoy";
import Missandei from "./Components/Missandei";
import Olena from "./Components/Olena";
import Cart from "./Components/Cart";

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
        <Route path="/catelyn" element={<Catelyn />}></Route>
        <Route path="/cersei" element={<Cersei />}></Route>
        <Route path="/baelish" element={<Baelish />}></Route>
        <Route path="/lysa" element={<Lysa />}></Route>
        <Route path="/arryn" element={<Arryn />}></Route>
        <Route path="/osha" element={<Osha />}></Route>
        <Route path="/lv-bags" element={<LVBags />}></Route>
        <Route path="/yara" element={<Yara />}></Route>
        <Route path="/ygritte" element={<Ygritte />}></Route>
        <Route path="/margaery" element={<Margaery />}></Route>
        <Route path="/brienne" element={<Brienne />}></Route>
        <Route path="/shae" element={<Shae />}></Route>
        <Route path="/ros" element={<Ros />}></Route>
        <Route path="/melisandre" element={<Melisandre />}></Route>
        <Route path="/greyjoy" element={<Greyjoy />}></Route>
        <Route path="/missandei" element={<Missandei />}></Route>
        <Route path="/olena" element={<Olena />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Newsletter />
      <Footer />
      <CookieConsent />
      <TawkTo />
    </div>
  );
}

export default App;
