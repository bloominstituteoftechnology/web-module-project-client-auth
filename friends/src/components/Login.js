import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state= {
        credentials:{
            username: '',
            password: ''
        }
    };

    handleInput = e =>{
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res =>{
            console.log(res)
            localStorage.setItem("token", res.data.payload)
            this.props.history.push('/protected')
        })
        .catch(err =>{
            console.log(err)
        })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleInput}/>
                    <input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleInput}/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
export default Login;