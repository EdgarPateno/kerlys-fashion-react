import React from 'react';
import CookieConsent from './Components/CookieConsent';
import TawkTo from './Components/Tawkto';
import Header from './Components/Header';
import HomepageBannerBag from './Components/HomepageVideoBannerBag';
import ShopByBrands from './Components/ShopByBrands';
import ElevateFashionImageBanner from './Components/ElevateFashionImageBanner';
import WomenBagsJewelryImageBanner from './Components/WomenBagsJewelryImageBanner';
import HomepageVideoBannerShoes from './Components/HomepageVideoBannerShoes';
import FeaturedProductsCarousel from './Components/FeaturedProductsCarousel';
import JewelryVideoBanner from './Components/JewelryVideoBanner';
import ReviewsCarousel from './Components/ReviewsCarousel';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <CookieConsent />
      <TawkTo />
      <Header />
      <HomepageBannerBag />
      <FeaturedProductsCarousel />
      <ShopByBrands />
      <ElevateFashionImageBanner />
      <WomenBagsJewelryImageBanner />
      <HomepageVideoBannerShoes />
      <JewelryVideoBanner />
      <ReviewsCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;