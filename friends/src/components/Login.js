import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

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
    console.log('handleChange fired and gives me:', this.state.credentials);
  };

  //old method. 
  // login = e => {
  //   e.preventDefault();
  //   axiosWithAuth.post('http://localhost:5000/api/login', this.state.credentials)
  //   .then(resp=>{
  //     console.log(res);
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // };


  login = (e) => {
    e.preventDefault();
    // 1. use axios to make post request
    console.log('Login Fired!! Credentials are:', this.state);
    axiosWithAuth()
      .post("/login", this.state.credentials)
      // 2. if request is successful, log token
      .then((res) => {
        console.log("Login Res.data.token", res.data.payload);
        localStorage.setItem("token", res.data.payload);
        // localStorage.setItem("username", res.data.payload);
        // localStorage.setItem("password", res.data.payload);
        console.log("this.props", this.props);
        this.props.history.push("/protected");
      })
      // 3. if request is error, log error
      .catch((err) => console.log(err));
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