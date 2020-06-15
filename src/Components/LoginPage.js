import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../Action/UserAction';

export default function LoginPage(props) {

    const [username, setUsername] = useState('');
    const [passowrd, setPassword] = useState('');
    const userLogin = useSelector(state=>state.userLogin);
    const { loading, userInfo, error } = userLogin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=") [1]:'/';

    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(username, passowrd));
    }

    return  (
        <div>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h3>User Login</h3>
                        </li>
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </li>
                        <li>
                            <label className="label-title" htmlFor="name">Username</label>
                            <input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </li>
                        <li>
                            <label className="label-title" htmlFor="password">Passowrd</label>
                            <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="button btn-bg">Login</button>
                        </li>
                        <li className="li-title">
                            New to GPZ?
                        </li>
                        <li className="new-btn">
                            <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button text-center button.btn-bg-2">Create New Account</Link>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}