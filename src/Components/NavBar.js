import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useSelector } from 'react-redux';

export default function LoginPage(props) {


    const logout = (event) => {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        window.location.href = "/login"
        event.preventDefault();
    };

    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;

        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="login-bar">
                    <span className="title">
                        <Link to="/" className="nav-brand">Game Player Zoon</Link>
                    </span>
                </div>
                <div className="A collpase navbar-collapse navi-a">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/community" className="nav-link">Community</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/shopping" className="nav-link">Shopping</Link>
                        </li>
                    </ul>
                    <ul align="right" className="navbar-nav">
                        <li className="navbar-item">
                            <Link to="/Post" className="nav-link">Post</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/edit" className="nav-link">Edit</Link>
                        </li>
                        {/* <li className="navbar-item">
                            <Link to="/" className="nav-link" onClick={(event) => logout(event)}>{localStorage.getItem("name")}Logout</Link>
                        </li> */}
                    </ul>
                    <ul align="right" className="navbar-nav">
                        <li className="navbar-item login-btn">
                            {
                                userInfo ? <Link to="/profile">{userInfo.username}</Link>:
                                <Link to="/login" className="nav-link">Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        );
}
