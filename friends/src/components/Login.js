import React, { useState } from 'react';

const Login =()=> {
    const [loginForm, setLoginForm] = useState({
        username:'',
        password:''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            username: loginForm.username,
            password: loginForm.password
        }
        console.log('submit', form)
    }

    const handleChanges = (event) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div className='login-form-container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    <input
                        onChange={handleChanges}
                        type="text"
                        name="username"
                        value={loginForm.username}
                        placeholder='type username here' />
                </label>

                <label htmlFor="password">
                    <input
                        onChange={handleChanges}
                        name='password'
                        value={loginForm.password}
                        placeholder='type password here'
                        type="password"/>
                </label>

                <button type='submit'> login </button>
            </form>

        </div>
    )
}

export default Login;