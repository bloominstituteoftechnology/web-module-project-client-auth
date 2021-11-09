import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials:{
            username: '',
            password: ''
        }
    }

    handleChange = e =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e =>{
        e.preventDefault()

        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res =>{
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('role', res.data.role)
            localStorage.setItem('username', res.data.username)
            this.props.history.push('/protected');
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <div className = 'userPass'>
                    <input className = 'user'
                        type = 'text'
                        name = 'username'
                        value = {this.state.credentials.username}
                        placeholder = 'Username'
                        onChange = {this.handleChange}
                    />
                    <input
                        type = 'password'
                        name = 'password'
                        value = {this.state.credentials.password}
                        placeholder = 'Password'
                        onChange = {this.handleChange}
                    />
                    </div>
                    <button>Login</button>
                    
                </form>
            </div>
        )
    }
}

export default Login;