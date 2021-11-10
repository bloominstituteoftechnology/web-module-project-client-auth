import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import axiosWithAuth from '../utils/axiosWithAuth';

class Friends extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        axiosWithAuth().get('/api/friends', { 

        }).then(response => {
            this.setState({
                ...this.state,
                friends: response.data
            })
        }).catch(error => {
            console.error(error);
        })
    }

    render() {

        const { friends } = this.state;
        return(
            <div>
                {friends.map(friend => {
                    return(
                        <div key = {friend.id}>
                            <h3>Name: {friend.name}</h3>
                            <h3>Age: {friend.age}</h3>
                            <h3>Email: {friend.email}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Friends; 