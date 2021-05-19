import React, { Component } from 'react'
import axios from 'axios'


export class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [e.target.name]: e.target.value
            }
        })
    }

    login = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            this.props.history.push('/friends')
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <label>
                        Username:
                    <input
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password:
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                    </label>
                    <button> Let me in!</button>
                </form>
            </div>
        )
    }
}

export default Login
