import React from 'react'
import '../CSS/BelowATCBadges.css'

const BelowATCBadges = () => {
    return (
        <div className="below-ATC-badges container mt-4">
            <div className="row">
                <div className="shipping col text-center">
                    <img src="/logos-icons/belowATC-badges/free-shipping.webp" alt="" />
                    <h4>Free Shipping</h4>
                </div>
                <div className="happiness col text-center">
                    <img src="/logos-icons/belowATC-badges/money-back.webp" alt="" />
                    <h4>30 Day</h4>
                </div>
                <div className="warranty col text-center">
                    <img src="/logos-icons/belowATC-badges/warranty.webp" alt="" />
                    <h4>One Year</h4>
                </div>
            </div>
        </div>
    )
}

export default BelowATCBadges