import React from 'react';
import useForm from "../Hooks/useForm";
import makeRequest from '../Api';
import { v4 as uuid } from "uuid"

const initialState = {
    id: uuid(),
    name: "",
    age: 0,
    email: ""
}

export default function CreateFriends() {
    const [state, handleChange] = useForm(initialState)

    const submit = event => {
        event.preventDefault()
        makeRequest().post("/api/friends", state)
            .then(res => {
                console.log()
            })
    }

    return (
        <form onSubmit={submit}>
            <label for="name">
                Name:
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />
            </label>
            <label for="age">
                Age:
                <input 
                    type="number"
                    id="age"
                    name="age"
                    value={state.age}
                    onChange={handleChange}
                />
            </label>
            <label for="email">
                Email:
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}
