import React, { Component } from 'react';
import Axios from 'axios';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            re_username: '',
            re_password: '',
            re_password_confirmation: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangePasswordConfirmation(e) {
        this.setState({
            password_confirmation: e.target.value
        }); 
    }

    onSubmit(e) {
        e.preventDefault();
        
        const user = { 
            username: e.target.re_username.value,
            password: e.target.re_password.value,
            password_confirmation: e.target.re_password_confirmation.value,
        }

        // console.log(user);

        Axios.post('http://localhost:5000/users/add', user)
        .then((res) => {
            document.getElementById("Message").innerHTML = res.data.message;  
        })
                
        this.setState({
            username: '',
            password: '',
            password_confirmation: ''
        })
        window.location = '/community';
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup className="form-group">
                        <Label>Username</Label>
                        <Input type="text" name="re_username" onChange={this.onChangeUsername}/>
                    </FormGroup>

                    <FormGroup className="form-group">
                        <Label>Password</Label>
                        <Input type="password" name="re_password" onChange={this.onChangePassword}/>
                    </FormGroup>
                    
                    <FormGroup className="form-group">
                        <Label>Confirm Password</Label>
                        <Input type="password" name="re_password_confirmation" onChange={this.onChangePasswordConfirmation}/>
                    </FormGroup>

                    <h2 align="center" id="Message"></h2>
                    <Button type="submit" className="btn btn-primary" >Register</Button>

                </Form>
            </div>
        );
    }
}