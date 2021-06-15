import React, { useState } from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
    state = {
        friend: {
            id: '',
            name: '',
            age: '', 
            email: ""
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    submit = e => {
        e.preventDefault();
    };

    render () {
        return (
            <FriendForm>
                <div>
                    <form onSubmit={this.submit}>
                        <div>
                            <label>Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="name"
                                value={this.state.friend.name}
                                onChange={this.handleChange}
                            />
                            <label>Age:</label>
                            <input 
                            type="text" 
                            name="age" 
                            placeholder="Age"
                            value={this.state.credentials.age}
                            onChange={this.handleChange}
                            />
                            <label>Email:</label>
                            <input 
                            type="text" 
                            name="email" 
                            placeholder="Email"
                            value={this.state.credentials.email}
                            onChange={this.handleChange}
                            />
                        </div>
                        <button>Log In</button>
                    </form>
                </div>
            </FriendForm>
        );
    }
}

export default FriendForm;
