import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import RegisterPage from './Components/RegisterPage';
import Community from './Components/Community';
import Shopping from './Components/Shopping';
import CreatePost from './Components/CreatePost';
import ProductScreen from './Components/Products';
import ShoppingCart from './Components/ShoppingCart';
import LoginPage from './Components/LoginPage';
import AddProduct from './Components/AddProduct';
import Shipping from './Components/Shipping';
import Payment from './Components/Payment';
import PlaceOrder from './Components/PlaceOrder';
import Footer from './Components/Footer';



function App(){


  return (
    <Router>
      <NavBar />
      <React.Fragment>
        <div>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route exact path="/community" component={Community} />
          {/* <PrivateRoute exact path="/blogpage" component={BlogPage} /> example */}
          <Route path="/shopping" component={Shopping} />
          <Route path="/shipping" component={Shipping}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/placeorder" component={PlaceOrder}/>
          <Route path="/post" component={CreatePost} />
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/products/add" component={AddProduct} />
          <Route path="/cart/:id?" component={ShoppingCart} />
        </div>
      </React.Fragment>
      <Footer />
    </Router>
  );
}


export default App;
