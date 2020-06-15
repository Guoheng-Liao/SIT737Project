import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../Action/ProductAction';

export default function Products(props) {
    const [qty, setQty] = useState(1);
    const ProductDetails = useSelector(state => state.ProductDetails);
    const { product, loading, error} = ProductDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch (detailsProduct(props.match.params.id));
        return () =>{
            //
        };
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return  (
        <div>
            <div className="return-btn">
                <Link to="/shopping"> &lt;- Back to Shopping</Link>
            </div>
            {loading ? <div>Loading...</div>:
            error ? <div>{error}</div>:
            (
                <div className="details">
                    <div className="details-image">
                        <img src={product.image} alt="product"></img>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                Price: <b>${product.price}</b>
                            </li>
                            <li>
                                Description:
                                <div>
                                    {product.description}
                                </div>
                            </li>
                            <li>
                                {product.brand}
                            </li>
                        </ul>
                    </div>
                    <div className="details-action">
                        <ul>
                            <li>
                                Price: {product.price}
                            </li>
                            <li>
                                Status: {product.countInStock>0 ? "In Stock" : "Unavailable"}
                            </li>
                            <li>
                                Qantity: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                    {[...Array(product.countInStock).keys()].map(x=>
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                        )}
                                </select>
                            </li>
                            <li>
                                {product.countInStock>0 && <button onClick={handleAddToCart} className="button btn-bg">Add to Cart</button>
                                }
                                </li>
                        </ul>
                    </div>
                </div>
            )
        }
            
        </div>
    );
    
}