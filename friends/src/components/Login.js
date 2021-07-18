import React from 'react';
import axios from 'axios';


class Login extends React.Component {
    state = {
        credentials: {
            username: 'Lambda School',
            password: 'i<3Lambd4'
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
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res => {
                console.log("AXIOS - PUT RESPONSE: ", res)
                localStorage.setItem("token", res.data.payload);
                this.props.history.push('/friends');
            })

            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            // <Login>
                <div>
                    <form onSubmit={this.login}>
                        <div>
                            <label>Username:</label>
                            <input 
                                type="text" 
                                name="username" 
                                placeholder="Username"
                                value={this.state.credentials.username}
                                onChange={this.handleChange}
                            />
                            <label>Password:</label>
                            <input 
                            type="text" 
                            name="password" 
                            placeholder="Password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            />
                        </div>
                        <button>Log In</button>
                    </form>
                </div>
            // </Login>
        );
    }
}

export default Login; 