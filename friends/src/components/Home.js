import React, { Component } from 'react';
import Axios from 'axios';

import '../styles/Home.css';
class Home extends Component {

    state = {
        newFriend: {
            id: 0,
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            newFriend: {
                ...this.state.newFriend, [name]: (name === 'age') ? Number(value) : value
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.newFriend);
        const token = localStorage.getItem('token');

        // bug here >>>>>
        Axios.post('http://localhost:5000/api/friends', this.state.newFriend, {
            headers: {
                authorization: token,
            }

        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };

    render() {
        return (
            <div>
                <h2>New</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Friends_logo.svg/300px-Friends_logo.svg.png" alt='' />
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.newFriend.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={this.state.newFriend.age}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={this.state.newFriend.email}
                        onChange={this.handleChange}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }

};

export default Home;