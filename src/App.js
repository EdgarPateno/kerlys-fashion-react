import React from 'react';
import AnnouncementBanner from './Components/AnnouncementBanner';
import MainNav from './Components/MainNav';
import HomepageBannerBag from './Components/HomepageVideoBannerBag';
import ShopByBrands from './Components/ShopByBrands';
import ElevateFashionImageBanner from './Components/ElevateFashionImageBanner';


function App() {
  return (
    <div>
      <AnnouncementBanner />
      <MainNav />
      <HomepageBannerBag />
      <ShopByBrands />
      <ElevateFashionImageBanner />
    </div>
  );
}

export default App;