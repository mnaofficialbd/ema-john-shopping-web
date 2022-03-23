import React from 'react';
import "./Cart.css"

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>order summary</h3>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;