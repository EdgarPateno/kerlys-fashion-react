
import React from 'react';
import HomepageVideoBannerBag from './HomepageVideoBannerBag';
import FeaturedProductsCarousel from './FeaturedProductsCarousel';
import ShopByBrands from './ShopByBrands';
import ElevateFashionImageBanner from './ElevateFashionImageBanner';
import WomenBagsJewelryImageBanner from './WomenBagsJewelryImageBanner';
import HomepageVideoBannerShoes from './HomepageVideoBannerShoes';
import JewelryVideoBanner from './JewelryVideoBanner';
import ReviewsCarousel from './ReviewsCarousel';
import Newsletter from './Newsletter';

function Home() {
    return (
        <div>
            <HomepageVideoBannerBag />
            <FeaturedProductsCarousel />
            <ShopByBrands />
            <ElevateFashionImageBanner />
            <WomenBagsJewelryImageBanner />
            <HomepageVideoBannerShoes />
            <JewelryVideoBanner />
            <ReviewsCarousel />
            <Newsletter />
        </div>
    );
}

export default Home;
