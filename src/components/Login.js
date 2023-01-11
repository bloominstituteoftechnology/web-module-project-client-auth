import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const initialFormValues = {
    username: '',
    password: '',
}

const Login = () => {
    let navigate = useNavigate();

    const[formValues,setFormValues] = useState(initialFormValues)
    const[error,setError] = useState('')

    function handleChange(e){
        setFormValues(() => {
            return{
                ...formValues,
                [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', formValues)
            .then(({data}) => {
                localStorage.setItem('token', data.token)
                navigate('/friendlist')
            })
            .catch(err => setError('Invalid login!'))
        setFormValues(initialFormValues)
    }
    return(
        <>
        {error && <p>{error}</p>}
        <label> LOGIN
           <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='username'>Username</label>
                <input 
                type='text'
                name="username"
                value={formValues.username}
                onChange={(e) => handleChange(e)}
                />
                <label htmlFor='password'>Password</label>
                <input 
                type='password'
                name='password'
                value={formValues.password}
                onChange={(e) => handleChange(e)}
                />
                <button>Submit</button>
            </form> 
        </label>
        </>
    )

}

export default Login;