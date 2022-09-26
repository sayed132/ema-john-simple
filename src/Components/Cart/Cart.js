import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let granTotal = 0;
    let quantity = 0;
    for (const product of cart) {

        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = total * 0.05;
    const totalTAx = parseFloat(tax.toFixed(2));
    granTotal = total + shipping + totalTAx;
    return (
        <div className='cart'>
            <h4>Order Summary <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></h4>
            <div>
                <p>Selected Item {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Shipping Fee: ${shipping}</p>
                <p>Tax: ${totalTAx}</p>
                <h4>Grand Total: ${granTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;