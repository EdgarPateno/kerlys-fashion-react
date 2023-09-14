import React from 'react'
import { useLocation } from 'react-router-dom';


const Cart = () => {
    const location = useLocation();
    const { title, image, price, quantity, subtotal } = location.state;

    return (
        <section className="cart-page">
            <h1 className="cart-page-title text-center">Review Your Cart</h1>
            <p>{title}</p>
            <img src={image} alt="Product Image" />
            <p>${price}</p>
            <p>{quantity}</p>
            <p>${subtotal}</p>
        </section>
    );
}

export default Cart;