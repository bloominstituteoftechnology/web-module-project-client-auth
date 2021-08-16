import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: "",
        },
    };

    handleChange = (e) => {
        this.state({
            credentials: {
                ...this.state.credentails,
                [e.target.name]: e.target.value,
            }
        })
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
        console.log("Login!! ");
        // 1. use axios to make post request
        axiosWithAuth()
            .post("/login", this.state.credentials)
            // 2. if request is successful, log token
            .then((res) => {
                console.log(res.data.token);
                localStorage.setItem("token", res.data.token);
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