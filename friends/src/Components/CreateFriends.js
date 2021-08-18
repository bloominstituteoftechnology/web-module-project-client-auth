import React from 'react';
import useForm from "../Hooks/useForm";
import makeRequest from '../Api';
import { useHistory } from 'react-router';

const initialState = {
    name: "",
    age: 0,
    email: ""
}

export default function CreateFriends(props) {
    const { setFriends } = props;
    const history = useHistory();
    const [state, handleChange] = useForm(initialState);

    const submit = event => {
        event.preventDefault()
        makeRequest().post("/api/friends", state)
            .then(res => {
                setFriends(res.data)
                history.push("/friends")
            })
    }

    return (
        <form onSubmit={submit}>
            <button onClick={() => history.goBack()} >Back</button>
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
