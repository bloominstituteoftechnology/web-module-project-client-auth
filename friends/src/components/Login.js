import axios from 'axios';
import React from 'react';

class Login extends React.Conponent {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials:{
      ...this.state.credentials,
      [e.target.name]: e.atget.value
      }
    })
  }

  login = e => {
    e.perventdefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials).then(resp=>{
      localStorage.setItem('token', resp.data.token);
      localStorage.setItem('role', resp.data.role);
      localStorage.setIem('username', resp.data.username);
      this.props.history.push('/protected')
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.login}>
        <input
          type='text'
          name='username'
          value={this.state.credentials.username}
          onChange={this.handleChange}
          />
          <input
            type='password'
            name= 'password'  
            value={this.state.credentials.password}
            />
            <button>Log in</button>
            </form>
      </div>
    )
  }

}

export default Login;