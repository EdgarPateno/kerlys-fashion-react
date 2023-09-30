import React, { useState } from 'react';
import ProductTabs from './ProductTabs';
import ProductAccordion from './ProductAccordion';
import ProductGallerySlides from './ProductGallerySlides';
import ProductInfoCard from './ProductInfoCard';

const Greyjoy = () => {

    //const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const productImages = [
        '/images/product-photos/greyjoy/greyjoy1.webp',
        '/images/product-photos/greyjoy/greyjoy2.webp',
        '/images/product-photos/greyjoy/greyjoy3.webp',
        '/images/product-photos/greyjoy/greyjoy4.webp',
    ];

    return (
        <div className="mt-5">
            <section className="greyjoy-product-page product-gallery-info-grid container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    <ProductGallerySlides images={productImages} />

                    <ProductInfoCard productTitle="Greyjoy" regularPrice="$1000" salePrice="$800" saveAmount="$200" />
                </div>
            </section>
            <section className="product-description-and-policies container mt-sm-3 mt-md-5">
                <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content">
                    <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                        <p>
                            The Greyjoy Blossom slingback pump is crafted from suede baby goat leather, which is complemented by an adjustable back strap in Louis Vuitton's emblematic natural leather. The strap bears the House signature and an engraved, gold-tone stud. The heel, inspired by the round Monogram Flower, is color-matched to the upper for a particularly refined look.
                        </p>
                    </div>
                </div>
                <ProductAccordion
                    description={
                        <div>
                            <p>
                                The Greyjoy Blossom slingback pump is crafted from suede baby goat leather, which is complemented by an adjustable back strap in Louis Vuitton's emblematic natural leather. The strap bears the House signature and an engraved, gold-tone stud. The heel, inspired by the round Monogram Flower, is color-matched to the upper for a particularly refined look.
                            </p>
                        </div>
                    }
                />
            </section>
        </div>

    )
}

export default Greyjoy;