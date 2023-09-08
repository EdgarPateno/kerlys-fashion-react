import React from 'react';
import CookieConsent from './Components/CookieConsent';
import TawkTo from './Components/Tawkto';
// import AnnouncementBanner from './Components/AnnouncementBanner';
// import MainNav from './Components/MainNav';
import Header from './Components/Header';
import HomepageBannerBag from './Components/HomepageVideoBannerBag';
import ShopByBrands from './Components/ShopByBrands';
import ElevateFashionImageBanner from './Components/ElevateFashionImageBanner';
import WomenBagsJewelryImageBanner from './Components/WomenBagsJewelryImageBanner';
import HomepageVideoBannerShoes from './Components/HomepageVideoBannerShoes';
import FeaturedProductsCarousel from './Components/FeaturedProductsCarousel';
import JewelryVideoBanner from './Components/JewelryVideoBanner';
import ReviewsCarousel from './Components/ReviewsCarousel';

function App() {
  return (
    <div>
      <CookieConsent />
      <TawkTo />
      {/* <AnnouncementBanner />
      <MainNav /> */}
      <Header />
      <HomepageBannerBag />
      <FeaturedProductsCarousel />
      <ShopByBrands />
      <ElevateFashionImageBanner />
      <WomenBagsJewelryImageBanner />
      <HomepageVideoBannerShoes />
      <JewelryVideoBanner />
      <ReviewsCarousel />
    </div>
  );
}

export default App;