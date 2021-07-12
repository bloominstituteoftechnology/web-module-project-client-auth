import React from 'react';
import axios from 'axios';

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
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.login.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.login.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;