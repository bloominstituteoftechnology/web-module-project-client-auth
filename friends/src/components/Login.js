import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();
        this.setState({
            ...this.state,
            isLoading: true
        })
        console.log(this.state.credentials)
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log(res)
            this.setState({
                ...this.state,
                isLoading: false
            })
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/protected')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.login}>
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
                    <button>Log In</button>
                    {this.state.isLoading && <p>Loading!!!</p>}
                </form>
            </div>
        );
    };
};

export default Login;