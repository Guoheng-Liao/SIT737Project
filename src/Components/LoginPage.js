// import React, { Component } from 'react';
// import Axios from 'axios';
// // import { Link } from "react-router-dom";
// import {Form, FormGroup, Input, Label} from "reactstrap";

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
            // props.history.push("/");
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








// export default class LoginPage extends Component {
//     constructor(props) {
//         super(props);

//         this.onChangeUsername = this.onChangeUsername.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             loginUsername: '',
//             loginPassword: '',
//         };
    
//     }

//     onChangeUsername(e){
//         this.setState({
//             loginUsername:e.target.value
//         });
//     }

//     onChangePassword(e){
//         this.setState({
//             loginPassword:e.target.value
//         });
//     }

//     onSubmit(e){
//         e.preventDefault();

//         let username = e.target.loginUsername.value;
//         let password = e.target.loginPassword.value;

//         Axios.post("http://localhost:5000/users/login",{
//             username,
//             password,
//         }).then((res) => {
//             document.getElementById("Message").innerHTML =
//                 res.data.message;
//             let success = res.data.success;
            
//             if(success)
//             {
//                 let name = res.data.name;
//                 let token = res.data.token;
//                 localStorage.setItem("token", token);
//                 localStorage.setItem("name", name);
//                 window.location.href = "/post"
//             }
//             console.log(res.data.message);
//         })
//     }



//     render(){
//         return(
//             <div>
//                 <h1 align="center">Login</h1>
//                 <Form onSubmit={this.onSubmit}>
//                     <div >
//                         <FormGroup className="form-group">
//                             <Label>Username: </Label>
//                             <Input type="text"
//                             // placeholder="Username"
//                             className="form-control"
//                             name="loginUsername"
//                             onChange={this.onChangeUsername}>
//                             </Input>
//                         </FormGroup>

//                         <FormGroup className="form-group">
//                             <Label>Password: </Label>
//                             <Input type="password"
//                             // placeholder="passowrd"
//                             className="form-control"
//                             name="loginPassword"
//                             onChange={this.onChangePassword}>
//                             </Input>
//                         </FormGroup>
//                     </div>
//                     <h4 align="center" id="Message"></h4>
//                     <div>
//                         <button type="submit" className="btn btn-primary">Login</button>
//                     </div>
//                 </Form>
//             </div>
//         );
//     }
// }



