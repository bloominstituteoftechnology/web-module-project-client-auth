import React, {useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';


const initialState = {
    isLoading: false,
    username: "",
    password: ""
}

function Login () {
    const [state, setState] = useState(initialState);

    const history = useHistory()

    const handleChange = e => {
        setState({...state, [e.target.name] : e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/login", state)
            .then(res => {
                localStorage.setItem("authToken", res.data.payload);
                history.push("/friends");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <h2>Login</h2>
                <label htmlFor="username">Username
                    <input name="username" value={state.username} onChange={handleChange} /><br />
                </label>
                <label htmlFor="password">Password
                    <input name="password" type="password" value={state.password} onChange={handleChange} /><br />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login