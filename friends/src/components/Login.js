
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    

    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    });

    const {push} = useHistory();

    const handleChanges = e => {

        setLoginInfo({...loginInfo, [e.target.name]: e.target.value})

    }

    const submitHandler = e => {

        e.preventDefault();
        axios.post('http://localhost:5000/api/login', loginInfo)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            push('/protected');
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input name="username" type="text" value={loginInfo.username} placeholder="Username" onChange={handleChanges}/> 
                <input name="password" type="password" value={loginInfo.password} placeholder="Password" onChange={handleChanges}/> 
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;