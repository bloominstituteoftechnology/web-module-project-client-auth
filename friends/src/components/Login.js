import React from 'react';
import axios from 'axios';




//1. Step 1 - create a simple login form with username & password, login button

class Login extends React.Component{
    state = {
        body: {
            username: '',
            password: '',
            isLoading: false
        }
    };

    handleChange = e => {     //This is allowing for anyone to type in their own user/pass
        this.setState({
            body: {
                ...this.state.body,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state.body) //takes endpoint & whatever we're adding

             .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload); //setting the token
                this.props.history.push('/protected');//after the token is verified it takes us to this protected page (our friends list)
             }) 
             .catch(err => console.log(err));
      
            
    };

    render() {
    return(
        <div>
            <form onSubmit={this.login}>
                <input  
                    type='text'
                    name='username'
                    placeholder='username'
                    value={this.state.body.username}
                    onChange={this.handleChange}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    value={this.state.body.password}
                    onChange={this.handleChange}
                />
                <button>Login</button>
            </form>
        </div>
        );
    }
}

export default Login;

