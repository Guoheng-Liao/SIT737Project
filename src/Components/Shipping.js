import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { saveShipping } from '../Action/CartAction';
import CheckoutSteps from './CheckoutSteps';
// import { saveShipping } from '../Action/CartAcation';

export default function Shipping(props) {

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [country, setCountry] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShipping({address, city, postalCode, country}));
        props.history.push("payment");
    }

    return  (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Shipping</h2>
                        </li>

                        <li>
                            <label className="label-title" htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} />
                        </li>
                        <li>
                            <label className="label-title" htmlFor="city">City</label>
                            <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)} />
                        </li>
                        <li>
                            <label className="label-title" htmlFor="postalCode">Postal Code</label>
                            <input type="text" name="postalCode" id="postalCode" onChange={(e) => setPostalCode(e.target.value)} />
                        </li>
                        <li>
                            <label className="label-title" htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" onChange={(e) => setCountry(e.target.value)} />
                        </li>

                        <li>
                            <button type="submit" className="button btn-bg">Continue</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}