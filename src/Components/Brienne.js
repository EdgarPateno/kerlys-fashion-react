import React, { useState } from 'react';
import ProductTabs from './ProductTabs';
import ProductAccordion from './ProductAccordion';
import ProductGallerySlides from './ProductGallerySlides';
import ProductInfoCard from './ProductInfoCard';

const Brienne = () => {

    //const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const productImages = [
        '/images/product-photos/brienne/brienne.webp',
        '/images/product-photos/brienne/brienne1.webp',
        '/images/product-photos/brienne/brienne2.webp',
    ];

    return (
        <div className="mt-5">
            <section className="brienne-product-page product-gallery-info-grid container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    <ProductGallerySlides images={productImages} />

                    <ProductInfoCard productTitle="Brienne" regularPrice="$1000" salePrice="$800" saveAmount="$200" />
                </div>
            </section>
            <section className="product-description-and-policies container mt-sm-3 mt-md-5">
                <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content">
                    <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                        <p>Discover the beauty of simplicity with our Brienne Earrings. This elegant piece is
                            a symbol of understated sophistication. The sterling silver pendant hangs gracefully from a
                            delicate chain, making it a versatile accessory suitable for any outfit or occasion.</p>
                        <p>Whether you wear it alone for a minimalist look or layer it with other necklaces for a trendy
                            style, this necklace is a timeless addition to your jewelry collection. Elevate your elegance
                            with our Classic Silver Pendant Necklace.</p>
                    </div>
                </div>
                <ProductAccordion
                    description={
                        <div>
                            <p>Introducing the exquisite Brienne Earrings – a true embodiment of elegance and sophistication. Crafted
                                with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.</p>
                            <p>Enveloped in the gentle embrace of a soothing baby blue hue, the Aeliana Luxury Bag exudes an aura of
                                timeless charm and refined beauty. The color evokes a sense of tranquility and grace, making it the
                                perfect companion for any occasion, whether it be a casual outing or a glamorous soirée.</p>
                        </div>
                    }
                />
            </section>
        </div>

    )
}

export default Brienne;