import React from 'react';
import data from './Data';
import { Link } from 'react-router-dom';

export default function Products(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);

    return  (
        <div>
            <div className="return-btn">
                <Link to="/shopping">Back to result</Link>
            </div>
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
                            Status: {product.status}
                        </li>
                        <li>
                            Qantity: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li>
                            <button className="button btn-bg">Add to Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    
}