import React, { useState } from 'react';
import axios from 'axios';


const Login = props =>{

    const {value, handleChange, history} = props;
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://localhost:5000/api/login', value)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
            setIsLoading(false);
            history.push('/friendslist')
        })
        .catch(err => {
            console.log(err)
            setIsLoading(false);
        })
      }

    return(
        <div className='Login'>
            {isLoading ? <h1>Loading...</h1> : null}
        <form onSubmit={handleSubmit}>
            <label>username:</label>
        <input type='text' name='username' value={value.username} onChange={handleChange}/>
            <label>password:</label>
        <input type='password' name='password' value={value.password} onChange={handleChange}/>
        <button>Submit</button>
        </form>
        </div>
    )
}

export default Login