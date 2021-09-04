import { useState } from 'react'
import axios from 'axios'

const Login = (props) => {

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
    const handleSubmit = (e) => {
        e.preventDefault()
        // setIsLoading(!isLoading)
    }

    const login = () => {

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
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Login;