import React from 'react'
import { useLocation } from 'react-router-dom';


const Cart = () => {
    const location = useLocation();
    const { title, image, price, quantity, subtotal } = location.state;

    return (
        <section className="cart-page">
            <h1 className="cart-page-title text-center">Review Your Cart</h1>
            <p>Title: {title}</p>
            <img src={image} alt="Product Image" />
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>Subtotal: ${subtotal}</p>
        </section>
    );
}

export default Cart;