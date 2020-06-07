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


function App(){
  return (
    <Router>
      <NavBar />
      <React.Fragment>
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/community" component={Community} />
          <PrivateRoute exact path="/blogpage" component={BlogPage} /> {/* example */}
          <PrivateRoute exact path="/edit" component={UserEdit} />
          <Route exact path="/shopping" component={Shopping} />
          <Route exact path="/post" component={CreatePost} />
        </div>
      </React.Fragment>
    </Router>
    // <Router>
    // {/* <NavBar /> */}
    // <div className="container">
    //   <NavBar />
    //     {/* <Switch> */}
    //   <br />  
    //   <React.Fragment>
    //       {/* <Route exact path={"/"} component={HomePage} />
    //       <Route exact path={"/login"} component={LoginPage} />
    //       <Route exact path={"/edit"} component={UserEdit} />
    //       <Route exact path={"/register"} component={RegisterPage} />
    //       <Route excat path={"/community"} component={Community} />
    //       <Route excat path={"/shopping"} component={Shopping} /> */}
    //       <Route path="/" exact component={HomePage} />
    //       <Route path="/login" component={LoginPage} />
    //       <Route path="/register" component={RegisterPage} />
    //       <Route path="/community" component={Community} />
    //       <PrivateRoute path="/edit/:id" component={UserEdit} />
    //       <PrivateRoute path="/post" component={CreatePost} />
    //       <Route path="/shopping" component={Shopping} />
    //     {/* </Switch> */}
    //   </React.Fragment>
    // </div>
    // </Router>

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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
