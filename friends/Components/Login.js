import React from 'react'
import axios from 'axios'


class Login extends React.Component {
state = {
    credentials: {
        username: '',
        password: ''
    }
}

handleChange =e=>{
    this.setState({
        credentials:{
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }
    });
};

    login = e =>{
        e.preventDefault();
         //1. make a request to our server for login
    //2. we need to pass in our credential
    //3. If request is successful, console.log our result
    //4. If request fails show our error

    }

    render(){

        return (
            <div>
                <form onSubmit={this.login}>
                    <inpiut 
                    type= 'text'
                    name= 'username'
                    value= {this.state.credentials.username}
                    onChange={this.handleChange}
                    />

                    <input 
                    type= 'text'
                    name = 'password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    />

                <button>Log in</button>
                </form>
            </div>
        )
    }

}

export default Login
