import React from 'react';
import {axiosWithAuth} from '../axiosWithAuth/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: 'lambda',
            password: 'school'
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
e.preventDefault();
axiosWithAuth()
.post('/login', this.state.credentials)
.then(res => {
    localStorage.setItem("token", res.data.payload);
    this.props.history.push('/protected')
})
.catch(err => {
    console.log(err)
})
    };

    render() {
        
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    name="username"
                    value={this.state.credentials.username}
                    type="text"
                    onChange={this.handleChange} />

                    <input
                    name="password"
                    value={this.state.credentials.password}
                    type="password"
                    onChange={this.handleChange} />
                    <button>Login</button>
                </form>
            </div>
        );
    };
};

export default Login;
