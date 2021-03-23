import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    state = {
        credientials: {
            username: '',
            password: '',
        }
    };

    handleChange = e => {

    };

    login = e => {

    };

    render() {
        return (
        <div>
            <h2>Login</h2>
        </div>
        );
    };
};

export default Login;