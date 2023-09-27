import React, { useState } from 'react';
import '../CSS/Yara.css'
import ProductTabs from './ProductTabs';
import ProductAccordion from './ProductAccordion';
import ProductGallerySlides from './ProductGallerySlides';
import ProductInfoCard from './ProductInfoCard';

const Yara = () => {

    //const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const productImages = [
        '/images/product-photos/yara/yara1.webp',
        '/images/product-photos/yara/yara2.webp',
        '/images/product-photos/yara/yara3.webp',
        '/images/product-photos/yara/yara4.webp',
        '/images/product-photos/yara/yara5.webp',
    ];

    return (
        <div className="mt-5">
            <section className="yara-product-page container-sm">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    <ProductGallerySlides images={productImages} />

                    <ProductInfoCard productTitle="Yara" regularPrice="$1000" salePrice="$800" saveAmount="$200" />
                </div>
            </section>
            <section className="container mt-sm-3 mt-md-5">
                <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content">
                    <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                        <p>Discover the beauty of simplicity with our Yara Pendant Necklace. This elegant piece is
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
                            <p>Discover the beauty of simplicity with our Yara Pendant Necklace. This elegant piece is
                                a symbol of understated sophistication. The sterling silver pendant hangs gracefully from a
                                delicate chain, making it a versatile accessory suitable for any outfit or occasion.</p>
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

export default Yara;