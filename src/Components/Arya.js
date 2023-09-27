import React, { useState } from 'react';
import '../CSS/Arya.css'
import ProductTabs from './ProductTabs';
import ProductAccordion from './ProductAccordion';
import ProductGallerySlides from './ProductGallerySlides';
import ProductInfoCard from './ProductInfoCard';

const Arya = () => {
    //const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const productImages = [
        '/images/product-photos/arya/arya-1.webp',
        '/images/product-photos/arya/arya-2.webp',
        '/images/product-photos/arya/arya-3.webp',
        '/images/product-photos/arya/arya-4.webp',
        '/images/product-photos/arya/arya-5.webp',
    ]

    return (
        <div className="mt-5">
            <section className="arya-product-page container-sm">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    <ProductGallerySlides images={productImages} />

                    <ProductInfoCard productTitle="Arya" regularPrice="$800" salePrice="$700" saveAmount="$100" />
                </div>
            </section>

            <section className="container mt-5">
                <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content">
                    <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                        <p>
                            Introducing the exquisite Arya Luxury Bag – a true embodiment of elegance and sophistication. Crafted
                            with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.</p>

                        <p>Enveloped in the gentle embrace of a soothing baby blue hue, the Aeliana Luxury Bag exudes an aura of
                            timeless charm and refined beauty. The color evokes a sense of tranquility and grace, making it the
                            perfect companion for any occasion, whether it be a casual outing or a glamorous soirée.</p>

                        <p>Indulge in the opulence of genuine leather as your fingertips graze across the impeccably smooth surface
                            of the Aeliana bag. This carefully selected leather not only enhances the bag's durability but also lends
                            an air of exclusivity, ensuring that your accessory stands the test of time while becoming a symbol of
                            your impeccable taste.</p>
                    </div>
                </div>
                <ProductAccordion
                    description={
                        <div>
                            <p>Introducing the exquisite Arya Luxury Bag – a true embodiment of elegance and sophistication. Crafted
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

export default Arya;