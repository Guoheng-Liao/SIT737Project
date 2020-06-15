import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { savePayment } from '../Action/CartAction';
import CheckoutSteps from './CheckoutSteps';

export default function Payment(props) {

    const [paymentMethod, setPaymentMethod] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push("placeorder");
    }

    return  (
        <div>
            <CheckoutSteps step1 step2 step3 ></CheckoutSteps>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Payment</h2>
                        </li>

                        <li>
                            <div>
                            <input type="radio" name="paymentMethod" id="paymentMethod" value="paypal"
                                onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label className="label-title" htmlFor="paymentMethod">Paypal</label>
                            </div>
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