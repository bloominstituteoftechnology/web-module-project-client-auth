import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

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
    //1.  make an axios call on the localhost:5000/api/login
    //2. pass in our username and password
    //3. console.log the toke that is returned
    //4. console.log the error if returned
    axiosWithAuth()
        .post('/login', this.state.credentials)
      .then(res=>{
        localStorage.setItem("token", res.data.payload);
        this.props.history.push('/protected')
      })
      .catch(err=>{
        console.log(err)
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