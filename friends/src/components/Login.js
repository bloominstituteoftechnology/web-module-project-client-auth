import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

class Login extends React.Component {
  state = {
    login: {
      username: '',
      password: ''
    }
  };

  handleChange = evt => {
    this.setState({
      login: {
        ...this.state.login,
        [evt.target.name]: evt.target.value
      }
    });
  };

  login = evt => {
    evt.preventDefault();
    
    axios
      .post('http://localhost:5000/api/login', this.state.login)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected');
      })
      .catch(err=>{
        console.log(err.response);
      });
  };

  render() {
    return (
      <div className = "login-container">
        <form onSubmit={this.login} className  ="login">
            <label>Username:

          <input
            type="text"
            name="username"
            value={this.state.login.username}
            onChange={this.handleChange}
            />
            </label>
            <label>Password:

          <input
            type="password"
            name="password"
            value={this.state.login.password}
            onChange={this.handleChange}
            />
            </label>
          <button className = "login-button">Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;