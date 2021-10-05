import React, { Component } from 'react'
import axios from 'axios';

export class Login extends Component {
    state = {
        credentials:{
            username: '',
            password:''
        }
        
    }
    onChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
           
        })
    }
    login = (e) => {
        e.preventDefault();
        console.log("buttonCLicked", this.state.credentials)
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then((res) => {
            console.log(res.data)
            localStorage.setItem('token', res.data.payload)
            console.log(this.props)
            this.props.history.push('/protected')
        })
        .catch((err) => {
            console.log(err.response)
        })

        
    }
    render() {
        console.log(this.state.credentials)
        return (
            <div>
                <form onSubmit={this.login}>
                    <label htmlFor='username'>User Name</label>
                    <input id='username' name='username' type='text' value={this.state.credentials.username} onChange={this.onChange}/>
                    <label htmlFor='password'>Password</label>
                    <input id='password' name='password' type='password' value={this.state.credentials.password} onChange={this.onChange}/>
                    <button type='submit'>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login
