import React, { useState } from 'react';
import useForm from "../Hooks/useForm";
import makeRequest from '../Api';
import { useHistory } from "react-router-dom";

const initialState = {
    username: "",
    password: "",
}

export default function Login() {
    const history = useHistory()
    const [state, handleChange] = useForm(initialState)
    const [loading, setLoading] = useState(false)
    
    const submit = event => {
        event.preventDefault()
        setLoading(true)
        makeRequest().post("/api/login", state)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
            history.push("/friends")
        })
    }

    if (loading) return <h2>loading</h2>
    
    return (
        <form onSubmit={submit}>
            <label htmlFor="username">
                Username:
                <input 
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={state.username}
                />
            </label>
            <label htmlFor="password">
                Password:
                <input 
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={state.password}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
