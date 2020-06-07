import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
    logout (e){
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        window.location.href = "/login"
        e.preventDefault();
    }

    
    render(){
        return(
            <React.Fragment>
            {/* <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="login-bar">
                    <span className="title">
                        <Link to="/" className="nav-brand">Game Player Zoon</Link>
                    </span>
                </div>
                <div>
                <Link to="/login" className="nav-bar">Login</Link> |
                <Link to="/register" className="nav-bar"> Register</Link> | */}
                {/* <Link to="/edit" className="nav-bar"> User Edit</Link> */}
                {/* </div>
                <div className="A collpase navbar-collapse">
                    <div className="a">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/community" className="nav-link">Community</Link>
                        </li>
                        <li>
                            <Link to="/Post" className="nav-link">Post</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/shopping" className="nav-link">Shopping</Link>
                        </li> 
                    </ul>
                    </div>
                </div>
            </nav> */}
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="login-bar">
                    <span className="title">
                        <Link to="/" className="nav-brand">Game Player Zoon</Link>
                    </span>
                </div>
                <div className="A collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/community" className="nav-link">Community</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/Shopping" className="nav-link">Shopping</Link>
                        </li>
                    </ul>    
                        {localStorage.getItem("token") ? (
                            <React.Fragment>
                                <ul align="right" className="navbar-nav">
                                    <li className="navbar-item">
                                    <Link to="/Post" className="nav-link">Post</Link>
                                    </li>
                                    <li className="navbar-item">
                                    <Link to="/edit" className="nav-link">Edit</Link>
                                    </li>
                                    <li className="navbar-item">
                                    <Link to="/" className="nav-link" onClick={(event) => this.logout(event)}>{localStorage.getItem("name")}Logout</Link>
                                    </li>
                                </ul>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {/* <div className="A collpase navbar-collapse"> */}
                                <ul align="right" className="navbar-nav">
                                    <li className="navbar-item">
                                    <Link to="/register" className="nav-link">Register</Link>
                                    </li>
                                    <li className="navbar-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                    </li>
                                    username</ul>
                                {/* </div> */}
                            </React.Fragment>
                        )}
                    {/* </ul> */}
                </div>
                </nav>
            </React.Fragment>
        );
    }
}
