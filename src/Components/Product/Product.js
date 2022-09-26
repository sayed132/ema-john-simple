import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import errorImg from '../../images/Blog Image.png'
import './Product.css'
const Product = (props) => {
    const { name, img, seller, ratings, price } = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""
            onError={(e)=>{
                e.currentTarget.src = errorImg
            }}
            />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <small>Manufacturer: {seller}</small><br />
                <small>Rating: {ratings} star</small>
            </div>
            <button onClick={() => props.handleToAddCart(props.product)} className='btn-cart'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;