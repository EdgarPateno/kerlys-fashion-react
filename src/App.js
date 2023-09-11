import React from 'react';
import CookieConsent from './Components/CookieConsent';
import TawkTo from './Components/Tawkto';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <CookieConsent />
      <TawkTo />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;