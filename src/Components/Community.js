import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import Axios from 'axios';
import './Footer.css';

export default class Comunity extends Component {
    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = { exercises: []};
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteExercise(id) {
        Axios.delete('http://localhost:5000/exercises/' +id)
            .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id) //el => element
        })
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deletExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }

    render(){
        return(
            <React.Fragment>
            <div>
                <h3>Game Community</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
            <div class="footer">
                    <footer class="footer-distributed">
                        <div class="footer-right">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=&lt;URL&gt;"><i class="fa fa-facebook"></i></a>

                            <a href="http://twitter.com/share?url=&lt;URL&gt;&amp;text=&lt;TEXT&gt;&amp;via=&lt;VIA&gt;"><i class="fa fa-twitter"></i></a>
                            <a href="mailto:?subject=&lt;SUBJECT&amp;body=&lt;BODY&gt;"><i class="fa fa-mail-forward"></i></a></div>
                        <div class="footer-left">
                            <p class="footer-links"><a href="#">Back to Top</a></p>
                            <p>Game Player Zone © 2020</p>
                        </div>
                    </footer>
                </div>

            </React.Fragment>
        );
    }
}

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)