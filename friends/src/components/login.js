import React, { useHistory } from "react";
import axios from "axios";

class Login extends React.Component {
    state={
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friends');
        })
        .catch(err => {
            console.log(err);
        })
    };

    componentDidMount(){
        setTimeout(() => { this.setState({
            isLoading: !this.state.isLoading
        }) }, 1000)
    }

    render() {
        return (
          <div>
            {this.state.isLoading === false && <h1>Loading User Login</h1>}
            {this.state.isLoading && <form onSubmit={this.login}>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <button>Log in</button>
            </form>}
          </div>
        );
      }
}

export default Login;