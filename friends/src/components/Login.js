import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // using axios for post request 
        axios.post('http://localhost:3000/api/login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
                console.log('token');
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }

};

export default Login;