import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const initialState = {
    credential: {
        username: '',
        password: ''
    }
};




const Login = (props) => {
const [credential, setCredential] = useState(initialState)
let history = useHistory();


const handleChange = (e) => {
    setCredential({
        ...credential,
        [e.target.name]: e.target.value
        
    })

};

const handleSubmt = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/login`, credential)
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/friends')
    }).catch(err => {
        console.error(err)
    })
}


    return (
       <form onSubmit={handleSubmt}>
           <input
           type='text'
           placeholder='username'
           onChange={handleChange}
           name='username'
           value={credential.username}
           /><br/>
           <input className='password'
           type='password'
           placeholder='password' 
           onChange={handleChange}
           name='password'
           value={credential.password}/><br/><br/>
           <Link className='forgot' to='/forgoten-password'>forgot password?</Link><br/>
           <button className='button'>Login</button>
        
       </form>
    )
}

export default Login
