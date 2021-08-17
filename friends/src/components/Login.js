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
        console.log("handleChange", this.state.credentials);
    };

    login = (e) => {
        e.preventDefault();
        console.log("Login", this.state);
        axiosWithAuth()
            .post("/login", this.state.credentials)
            .then((res) => {
                console.log("Login", res.data.payload);
                localStorage.setItem("token", res.data.payload);
                localStorage.setItem("username", res.data.payload);
                localStorage.setItem("password", res.data.payload);
                console.log("props in login", this.props);
                this.props.history.push("/protected");
            })
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