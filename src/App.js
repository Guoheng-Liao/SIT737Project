import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Community from './Components/Community';
import Shopping from './Components/Shopping';
import UserEdit from './Components/User-Edit';
import CreatePost from './Components/CreatePost';
import BlogPage from './Components/BlogPage';
import ProductScreen from './Components/Products';


function App(){
  return (
    <Router>
      <NavBar />
      <React.Fragment>
        {/* <div className="container"> */}
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/community" component={Community} />
          <PrivateRoute exact path="/blogpage" component={BlogPage} /> {/* example */}
          <PrivateRoute exact path="/edit" component={UserEdit} />
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/post" component={CreatePost} />
          <Route exact path="/product/:id" component={ProductScreen} />
        </div>
      </React.Fragment>
    </Router>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;
