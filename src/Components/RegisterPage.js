import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../Action/UserAction';

export default function RegisterPage(props) {

    const [username, setUsername] = useState('');
    const [passowrd, setPassword] = useState('');
    const [repassowrd, setRePassword] = useState('');
    const userRegister = useSelector(state=>state.userRegister);
    const { loading, userInfo, error } = userRegister;
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
        dispatch(register(username, passowrd));
    }

    return  (
        <div>
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h3>Create New Account</h3>
                        </li>
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </li>
                        <li>
                            <label className="label-title" htmlFor="name">Username</label>
                            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                        </li>
                        <li>
                            <label className="label-title" htmlFor="password">Passowrd</label>
                            <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
                        </li>
                        <li>
                            <label className="label-title" htmlFor="repassword">Confirm Passowrd</label>
                            <input type="password" id="repassword" name="repassword" onChange={(e)=>setRePassword(e.target.value)} />
                        </li>
                        <li>
                            <button type="submit" className="button btn-bg">Register</button>
                        </li>
                        <li className="li-title">
                            Already have an account? 
                            <Link to={redirect === "/" ? "login" : "login?redirect=" + redirect} className="button text-center button.btn-bg-2">Create New Account</Link>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}