import React from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    },
    isLoading: false
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
    axios.post("http://localhost:5000/api/login", this.state.credentials)
      .then(res => {
        console.log("happy path!", res.data.payload);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push("/FriendsList");
      })
      .catch(err => console.log("sad path:(", err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
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
          <button >LogIn</button>
          {this.props.isLoading && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}

        </form>
      </div>
    );
  }
}

export default Login;