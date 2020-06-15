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
                            <input type="password" id="password" name="password" onChange={(e)=>setRePassword(e.target.value)} />
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




// import React, { Component } from 'react';
// import Axios from 'axios';
// import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

// export default class RegisterPage extends Component {
//     constructor(props) {
//         super(props);

//         this.onChangeUsername = this.onChangeUsername.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//         this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             re_username: '',
//             re_password: '',
//             re_password_confirmation: ''
//         }
//     }

//     onChangeUsername(e) {
//         this.setState({
//             username: e.target.value
//         });
//     }

//     onChangePassword(e) {
//         this.setState({
//             password: e.target.value
//         });
//     }

//     onChangePasswordConfirmation(e) {
//         this.setState({
//             password_confirmation: e.target.value
//         }); 
//     }

//     onSubmit(e) {
//         e.preventDefault();
        
//         const user = { 
//             username: e.target.re_username.value,
//             password: e.target.re_password.value,
//             password_confirmation: e.target.re_password_confirmation.value,
//         }

//         // console.log(user);

//         Axios.post('http://localhost:5000/users/add', user)
//         .then((res) => {
//             document.getElementById("Message").innerHTML = res.data.message;  
//         })
                
//         this.setState({
//             username: '',
//             password: '',
//             password_confirmation: ''
//         })
//         window.location = '/community';
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Create New User</h3>
//                 <Form onSubmit={this.onSubmit}>
//                     <FormGroup className="form-group">
//                         <Label>Username</Label>
//                         <Input type="text" name="re_username" onChange={this.onChangeUsername}/>
//                     </FormGroup>

//                     <FormGroup className="form-group">
//                         <Label>Password</Label>
//                         <Input type="password" name="re_password" onChange={this.onChangePassword}/>
//                     </FormGroup>
                    
//                     <FormGroup className="form-group">
//                         <Label>Confirm Password</Label>
//                         <Input type="password" name="re_password_confirmation" onChange={this.onChangePasswordConfirmation}/>
//                     </FormGroup>

//                     <h2 align="center" id="Message"></h2>
//                     <Button type="submit" className="btn btn-primary" >Register</Button>

//                 </Form>
//             </div>
//         );
//     }
// }