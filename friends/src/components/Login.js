import React, {  useHistory } from 'react';
import axios from 'axios';

import './../CSS/user.css'

class Login extends React.Component {
    state = {
        credentials: {
          username: '',
          password: ''
        }
      };

    handleChange = (e) => {
        this.setState({
            credentials: {
              ...this.state.credentials,
              [e.target.name]: e.target.value
            }
          });        
    }

    handleSubmit = (e) => {
        e.preventDefault();        
        
        axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(resp=> {  
        console.log('resp: ', resp);      
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('role', resp.data.role);
        localStorage.setItem('username', resp.data.username);
        this.props.history.push('/protected');
      })
      .catch(err=> {
        console.log(err);
      })
    }

    render(){
        return (
            <div className="user-container">
                <div className="user-card">
                    <h2>Login Page!</h2>
                     <form className="user-form" onSubmit={this.handleSubmit}>
                         <div className="user-inputs">
                             <label> Username:
                                <input
                                    type="text"
                                    name="username"
                                    value={this.state.credentials.username}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div className="user-inputs">
                            <label> Password:
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.credentials.password}
                                    onChange={this.handleChange}
                                />
                                </label>
                         </div>
                         <button className="home-btn">Login</button>
                     </form>                    
                </div>
            </div>
        )
    }
}


export default Login;