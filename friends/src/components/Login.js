import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { axiosWithAuth } from '../axiosAuth'

const Login = (props) => {

    const history = useHistory()

    const [isLoading, setIsLoading] = useState(false)
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChanges = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }
    const logIn = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem("authtoken", res.data.token);
                localStorage.setItem("username", res.data.username);
                localStorage.setItem("password", res.data.password);
                history.push('/private');
            })
            .catch(err => {
                console.log(err);
            })
        // axiosWithAuth().get('http://localhost:5000/api/login').then(data => console.log(data));
        history.push('/private')
        // setCredentials({
        //     username: '',
        //     password: ''
        // })
    }



    return (
        <div>
            <h1> {isLoading ? (
                <p>Loading...</p>
            ) : ('')}</h1>
            <form>
                <label htmlFor="username">
                    <input name='username' onChange={handleChanges} type="text" placeholder="Enter Username" value={credentials.username} />
                </label>
                <label htmlFor="password">
                    <input name='password' type="password" onChange={handleChanges} placeholder="Enter Password" value={credentials.password} />
                </label>
                <button onClick={logIn}>Submit</button>
            </form>
        </div>
    )
}

export default Login;