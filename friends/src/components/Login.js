import React from "react";
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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

    login = () => {

        axios.post('http://localhost:5000/api/login',
        this.state.credentials)
        .then(res => {
            console.log(res);
            localStorage.setItem("token", res.data.payload);
            localStorage.setItem("username", this.state.credentials.username);
            this.props.history.push('/protected');
        })
        .catch(err => {
            console.error(err);
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;