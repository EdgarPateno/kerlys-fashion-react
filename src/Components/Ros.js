import React, { useState } from 'react';
import '../CSS/Ros.css'
import ProductTabs from './ProductTabs';
import ProductAccordion from './ProductAccordion';
import ProductGallerySlides from './ProductGallerySlides';
import ProductInfoCard from './ProductInfoCard';

const Ros = () => {

    //const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const productImages = [
        '/images/product-photos/ros/ros1.webp',
        '/images/product-photos/ros/ros2.webp',
        '/images/product-photos/ros/ros3.webp',        
    ];

    return (
        <div className="mt-5">
            <section className="ros-product-page container-sm">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    <ProductGallerySlides images={productImages} />

                    <ProductInfoCard productTitle="Ros" regularPrice="$1000" salePrice="$800" saveAmount="$200" />
                </div>
            </section>
            <section className="container mt-sm-3 mt-md-5">
                <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="tab-content">
                    <div id="description" className={`tab-pane ${activeTab === 'description' ? 'active' : ''}`}>
                        <p>Discover the beauty of simplicity with our elegant and timeless Ros ring. This elegant piece is
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
                            <p>Discover the beauty of simplicity with our elegant and timeless Ros ring. This elegant piece is
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

export default Ros;