import React, { Component } from 'react';
import Axios from 'axios';
// import { Link } from "react-router-dom";
import {Form, FormGroup, Input, Label} from "reactstrap";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            loginUsername: '',
            loginPassword: '',
        };
    
    }

    onChangeUsername(e){
        this.setState({
            loginUsername:e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            loginPassword:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        let username = e.target.loginUsername.value;
        let password = e.target.loginPassword.value;

        Axios.post("http://localhost:5000/users/login",{
            username,
            password,
        }).then((res) => {
            document.getElementById("Message").innerHTML =
                res.data.message;
            let success = res.data.success;
            
            if(success)
            {
                let name = res.data.name;
                let token = res.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("name", name);
                window.location.href = "/post"
            }
            console.log(res.data.message);
        })
    }



    render(){
        return(
            <div>
                <h1 align="center">Login</h1>
                <Form onSubmit={this.onSubmit}>
                    <div >
                        <FormGroup className="form-group">
                            <Label>Username: </Label>
                            <Input type="text"
                            // placeholder="Username"
                            className="form-control"
                            name="loginUsername"
                            onChange={this.onChangeUsername}>
                            </Input>
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label>Password: </Label>
                            <Input type="password"
                            // placeholder="passowrd"
                            className="form-control"
                            name="loginPassword"
                            onChange={this.onChangePassword}>
                            </Input>
                        </FormGroup>
                    </div>
                    <h4 align="center" id="Message"></h4>
                    <div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </Form>
            </div>
        );
    }
}



