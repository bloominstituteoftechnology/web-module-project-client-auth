import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    state = {credentials: {username: 'lambda', password: 'school'}}

    handleChange = e => {
        this.setState({credentials: {...this.state.credentials, [e.target.name]: e.target.value}})
    }

    login = e => {
        e.preventDefault()
        axios.post('https://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            console.log('AXIOS - FRIENDS PUT RESPONSE')
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <div>
                    <label>Username:</label>
                    <input type='text' name='username' placeholder='Username' value={this.state.credentials.username} onChange={this.handleChange} />
                    <label>Password:</label>
                    <input type='text' name='password' placeholder='Password' value={this.state.credentials.password} onChange={this.handleChange} />
                    </div>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login 