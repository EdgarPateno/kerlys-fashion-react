
import React from 'react';

const ProductTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div id="product-tabs">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        DESCRIPTION
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'shipping' ? 'active' : ''}`}
                        onClick={() => setActiveTab('shipping')}
                    >
                        SHIPPING
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'return' ? 'active' : ''}`}
                        onClick={() => setActiveTab('return')}
                    >
                        RETURN
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'guarantee' ? 'active' : ''}`}
                        onClick={() => setActiveTab('guarantee')}
                    >
                        GUARANTEE
                    </button>
                </li>
            </ul>

            <div className="tab-content mt-4">

                <div className={`tab-pane ${activeTab === 'shipping' ? 'active' : ''}`}>
                    <p>When you place your order, we know that you want to receive the item as fast as possible. We will make that happen.</p>
                    <p>How long will the entire ordering process take from order submission to delivery?</p>
                    <p>We will do our best to deliver your product as fast as possible, depending on your location.</p>
                    <p className="display-6">USA only:</p>
                    <ul>
                        <li>Standard Shipping: 5-10 Business Days via USPS (expect a slight delay due to COVID)</li>
                        <li>Express Shipping: 3-5 Business Days via FedEx </li>
                    </ul>
                </div>

                <div className={`tab-pane ${activeTab === 'return' ? 'active' : ''}`}>
                    <p>We have a pretty straightforward and simple return, refund, and exchange policy.</p>
                    <p>When you receive your order and want to exchange it with a different product, it MUST be unopened, unused, in original packaging, and with all the labels. First, you will need to contact us stating your reason for exchange. Then, you will need to ship the original order back to us, at your own expense. Once we receive it, we will inspect if it's unopened, unused, in original packaging, and with all the labels. Then, we will issue a store credit in the form of a code, and you will use that code to make a new purchase.</p>
                    <p>When you receive your order and have changed your mind and you want to return it, it MUST be unopened, unused, in original packaging, and with all the labels. First, you will need to contact us stating your reason for returning the item/s. Then, you will need to ship the original order back to us, at your own expense. Once we receive it, we will inspect if it's unopened, unused, in original packaging, and with all the labels. Then, we will issue a store credit only in the </p>
                </div>

                <div className={`tab-pane ${activeTab === 'guarantee' ? 'active' : ''}`}>
                    <p>At KERLYS FASHION, we take great pride in the craftsmanship and quality of our luxury shoes. We stand firmly behind the excellence of our products and offer a comprehensive guarantee to ensure your absolute satisfaction.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default ProductTabs;