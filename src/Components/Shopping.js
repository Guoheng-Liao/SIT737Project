import React, { useState, useEffect } from 'react';
import './GameShop.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ListProduct } from '../Action/ProductAction';

export default function Shopping(props) {

    // const [products, setProduct] = useState([]);
    const ProductList = useSelector(state => state.ProductList);
    const { products, loading, error } = ProductList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch (ListProduct());
        return () =>{
            //
        };
    }, [])

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMeun = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

        return <div className="grid-container">
                <header className="header"> 
                    <div className="brand">
                        <button onClick={openMenu}>
                            &#9776;
                        </button>
                        <Link to="/shopping">Game Shop</Link>
                    </div>
                    <div className="header-links">
                        <Link to="/cart">Cart</Link>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Shopping Categories</h3>
                    <button className="sidebar-close-btn" onClick={closeMeun}>x</button>
                    <ul>
                        <Link to="/shopping"><li>PC</li></Link>
                        <Link to="/shopping"><li>XBOX</li></Link>
                        <Link to="/shopping"><li>PS4</li></Link>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                    {   loading ? <div>Loading...</div> :
                        error ? <div>{error}</div> :
                        <ul className="products">
                            { 
                                products.map(product => 
                                    <li key={product._id}>
                                        <div className="product">
                                            <Link to={'/product/' + product._id}>
                                                <img className="product-image" src={product.image} alt="product"></img>
                                            </Link>
                                            <div className="product-name">
                                                <Link to={'/product/' + product._id}>{product.name}</Link>
                                            </div>
                                            <div className="product-brand">{product.brand}</div>
                                            <div className="product-price">${product.price.toFixed(2)}</div>
                                        </div>
                                    </li>)
                            }
                        </ul>
                    }   
                    </div>
                </main>
                <footer className="footer">
                    All right reserved.
                </footer>
            </div>
        
    
}

