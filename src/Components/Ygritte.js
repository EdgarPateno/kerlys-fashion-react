import React, { useState } from 'react';
import ProductTabs from './ProductTabs';
import ProductAccordion from './ProductAccordion';
import ProductGallerySlides from './ProductGallerySlides';
import ProductInfoCard from './ProductInfoCard';

const Ygritte = () => {

    //const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const productImages = [
        '/images/product-photos/ygritte/ygritte1.webp',
        '/images/product-photos/ygritte/ygritte2.webp',
        '/images/product-photos/ygritte/ygritte3.webp',
        '/images/product-photos/ygritte/ygritte4.webp',
        '/images/product-photos/ygritte/ygritte5.webp',
    ];

    return (
        <div className="mt-5">
            <section className="ygritte-product-page product-gallery-info-grid container-sm">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    <ProductGallerySlides images={productImages} />

                    <ProductInfoCard productTitle="Ygritte" regularPrice="$1000" salePrice="$800" saveAmount="$200" />
                </div>
            </section>
            <section className="container mt-sm-3 mt-md-5">
                <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content">
                    <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                        <p>Elevate your wrist with our Ygritte luxury bracelet, a masterpiece of elegance and individuality. This bracelet is more than just jewelry; it's a reflection of your unique style and personality. Crafted with meticulous attention to detail, it features an array of delicate charms that tell a story of love, adventure, and cherished memories.</p>
                        <p>Whether you wear it alone for a minimalist look or layer it with other necklaces for a trendy
                            style, this necklace is a timeless addition to your jewelry collection. Elevate your elegance
                            with our Classic Silver Pendant Necklace.</p>
                    </div>
                </div>
                <ProductAccordion
                    description={
                        <div>
                            <p>Elevate your wrist with our Ygritte luxury bracelet, a masterpiece of elegance and individuality. This bracelet is more than just jewelry; it's a reflection of your unique style and personality. Crafted with meticulous attention to detail, it features an array of delicate charms that tell a story of love, adventure, and cherished memories.</p>
                            <p>Whether you wear it alone for a minimalist look or layer it with other necklaces for a trendy
                                style, this necklace is a timeless addition to your jewelry collection. Elevate your elegance
                                with our Classic Silver Pendant Necklace.</p>
                        </div>
                    }
                />
            </section>
        </div>

    )
}

export default Ygritte;