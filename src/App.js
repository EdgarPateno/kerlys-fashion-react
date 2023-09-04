import React from 'react';
import CookieConsent from './Components/CookieConsent';
import TawkTo from './Components/Tawkto';
import AnnouncementBanner from './Components/AnnouncementBanner';
import MainNav from './Components/MainNav';
import HomepageBannerBag from './Components/HomepageVideoBannerBag';
import ShopByBrands from './Components/ShopByBrands';
import ElevateFashionImageBanner from './Components/ElevateFashionImageBanner';
import WomenBagsJewelryImageBanner from './Components/WomenBagsJewelryImageBanner';


function App() {
  return (
    <div>
      <CookieConsent />
      <TawkTo />
      <AnnouncementBanner />
      <MainNav />
      <HomepageBannerBag />
      <ShopByBrands />
      <ElevateFashionImageBanner />
      <WomenBagsJewelryImageBanner />
    </div>
  );
}

export default App;