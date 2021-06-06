import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            credentials: {
                ...this.state.credentials, [name]: value
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
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