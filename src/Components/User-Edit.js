import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

export default class UserEidt extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
        // this.setState({
        //     users: ['test user'],
        //     username: 'test user'
        // })
        Axios.get('http://localhost:5000/exercises/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username, 
                    description: response.data.description
                    // date: new Date(response.data.date)
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        Axios.get('http://localhost:5000/users/')
            .then(response => {
                if(response.data.length > 0)
                {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const exercise = { 
            username: this.state.username,
            description: this.state.description,
            date: this.state.date,
        }

        console.log(exercise);


        Axios.post('http://localhost:5000/exercises/update/'+ this.props.match.params.id, exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render(){
        return (
           <div>
               <h3>Eidt Post</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                    <label>Username: </label>
                    <select ref="userInput" 
                        required 
                        className="form-control" 
                        value={this.state.username} 
                        onChange={this.onChangeUsername}>
                        {
                            this.state.users.map(function(user) {
                                return <option
                                    key={user}
                                    value={user}>{user}
                                    </option>;
                            })
                        }
                    </select>
                   </div>
                   <div>
                       <div className="form-group">
                           <label>Description</label>
                           <input type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription} 
                                />
                       </div>
                   </div>
                   <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                            />
                        </div>
                   </div>
                   <div className="form-group">
                       <input type="submit" value="Edit Post Log" className="btn btn-primary" />
                   </div>
               </form>
           </div>
        )
    }

}

