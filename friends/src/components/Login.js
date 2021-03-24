import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    state = {
        credientials: {
            username: '',
            password: '',
        }
    };

    handleChange = e => {
        this.setState({
            credientials: {
                ...this.state.credientials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credientials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('./protected')
        })
        .catch(err => {
            console.log(err)
        })

    };

    render() {
        return (
        <div>
            <form onSubmit={this.login}>
                <label htmlFor='username'>UserName: </label>
                <input
                  type='text'
                  name='username'
                  value={this.state.credientials.username}
                  onChange={this.handleChange}
                />

                <label htmlFor='password'>Password: </label>
                <input
                  type='text'
                  name='password'
                  value={this.state.credientials.password}
                  onChange={this.handleChange}
                />
                <button>Log on in!</button>
            </form>
        </div>
        );
    };
};

export default Login;