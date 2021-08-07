import React from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            isLoading: false,
        }
    }
    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value,
            }
        })
    }
    login = event => {
        event.preventDefault()
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(response => {
            console.log(response);
            localStorage.setItem('token', response.data.payload)
            this.props.history.push('/protected')
        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.login}>
                    <input
                    type = 'text'
                    name = 'username'
                    onChange = {this.handleChange}
                    value = {this.state.credentials.username}
                    />
                    <input
                    type = 'password'
                    name = 'password'
                    onChange = {this.handleChange}
                    value = {this.state.credentials.password}
                    />
                    <button>Login</button>
                    {this.state.credentials.isLoading === true && (
                     <Loader
                     type="Puff"
                     color="#00BFFF"
                     height={100}
                     width={100}
                     timeout={3000}
                     /> 
                    )}
                </form>
            </div>
        )
    }
}
export default Login