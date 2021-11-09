import React from 'react';
import axois from 'axios';

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
    axios.post("http://localhost:5000/api/login")


}