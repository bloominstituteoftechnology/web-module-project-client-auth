import React from 'react';
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

  login = e => {
    e.preventDefault();
    //1. make an axios call on the login route, pass in our credientials : http://localhost:5000
    //2. if the call is successful, get our token and save it into localStorage
    //3. if the call is unsuccessful, console log the err

    axios.post("http://localhost:5000/api/login", this.state.credentials)
      .then(resp => {
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("role", resp.data.role);
        localStorage.setItem("username", resp.data.username);
        
        this.props.history.push('/protected');
      })
      .catch(err=> {
        console.log(err);
      })
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
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;