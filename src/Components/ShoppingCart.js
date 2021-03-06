import React, { useEffect } from 'react';
import { addToCart, RemoveFromCart } from '../Action/CartAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ShoppingCart(props){

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();

    const checkoutHandler = () =>{
        props.history.push("/login?redirect=shipping");
    }

    const RemoveFromCartHandle = (productId) => {
        dispatch(RemoveFromCart(productId));
    }

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [])

    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>
                            Shopping Cart
                        </h3>
                        <div className="price"> 
                            <b>Price</b>
                        </div>
                    </li>
                    {
                        cartItems.length === 0 ?
                        <div>
                            Cart is empty
                        </div>
                        :
                        cartItems.map( item => 
                            <li key={item.name}>
                                    <div className="cart-image">
                                        <img src={item.image} alt="product" />
                                    </div>
                                    <div className="cart-name">
                                        <div>
                                            <Link to={"/products/" + item.product}>
                                                <b>{item.name}</b>
                                            </Link>
                                        </div>
                                        <div>
                                            Quantity:
                                            <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                                {[...Array(item.countInStock).keys()].map(x=>
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                )}
                                            </select>
                                            <button type="button" className="button btn-bg delete-btn" onClick={() => RemoveFromCartHandle(item.product)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cart-price">
                                        ${item.price.toFixed(2)}
                                    </div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="cart-action">
                    <h3>
                        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)                    
                        :
                        $ {cartItems.reduce((a,c) => a + c.price * c.qty, 0)}
                    </h3>
                    <button onClick={checkoutHandler} className="button btn-bg full-width" disabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </button>
            </div>
        </div>
    );
} 