import React, { useState } from 'react';

const Login = () => {
    const [isLoading, setIsLoading] = useState({
        isLoading: false
    })
    const [state, setState] = useState({
        credentials: {
            username: '',
            password: ''
        }
    })

    // if (isLoading) {
    //     return (s
            
    //     )
    // }

    handleChange = e => {
        setCredentials({
          credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    return (
        <div>
            <form>
                <input
                    type="text"
                    name="username">
                    
                </input>
                <input
                    type="text"
                    name="password">
                    
                </input>
            </form>
        </div>
    )
}

export default Login;

// * The login function should save the returned token to localStorage. You can setup `isLoading` state in your Login component, and show a spinner on your form or in your button while the login request is happening.