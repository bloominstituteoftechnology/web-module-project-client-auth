import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const initialState = {
    credential: {
        username: '',
        password: ''
    }
};




const Login = () => {

const [credential, setCredential] = useState(initialState)



// const handleChange = (e) => {
//     setCredential({
//         ...credential,
//         [e.target.name]: e.target.value
        
//     })

// };

const handleSubmt = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, credential)
    .then(res => {
        console.log(res)
    })
}


    return (
       <form onSubmit={handleSubmt}>
           <input
           type='text'
           placeholder='username'
        //    onChange={handleChange}
           value={credential.username}
           /><br/>
           <input className='password'
           type='password'
           placeholder='password' 
        //    onChange={handleChange}
           value={credential.password}/><br/><br/>
           <Link className='forgot' to='/forgoten-password'>forgot password?</Link><br/>
           <button className='button'>Login</button>
        
       </form>
    )
}

export default Login
