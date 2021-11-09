import React from 'react';
import axois from 'axios';
import axios from 'axios';

class Login extends React.Component {

    // Initial state (values)
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    // handling change when clicking a button
    handleChange = event => {
         this.setState({
             credentials: {
                 ...this.state.credentials,
                 [event.target.name]: event.target.value
             }
         })
    };

    // Login axios call using Post
    login = () => {
        axios.post("http://localhost:5000/api/login", this.state.credentials)
            .then(response => {
                localStorage.setItem("token", response.data.payload);
                localStorage.setItem("username", this.state.credentials.username);
                this.props.history.push("/protected");

            }).catch(error => {
                console.error(error);
            })
    };

    
    // render props
    render() {
        return(
            <div>
                <form onSubmit = {this.login}>
                    {/* Input fields for username and password */}
                    <label> Username
                        <input
                            type = "text"
                            name = "username"
                            value = {this.state.credentials.username}
                            onChange = {this.handleChange}
                        />
                    </label>

                    <label> Password
                        <input
                            type = "password"
                            name = "password"
                            value = {this.state.credentials.password}
                            onChange = {this.handleChange}
                        />
                    </label>

                    {/* Submit button */}
                    <button>Log In</button>
                </form>
            </div>

        )
    }


}

export default Login;