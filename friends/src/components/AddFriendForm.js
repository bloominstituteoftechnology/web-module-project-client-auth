import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from "react-router";

const initialValues = {
    name: "",
    age: "",
    email: "",
}

function AddFriendForm() {
    const { push } = useHistory();
    const [formValues, setFormValues] = React.useState(initialValues);
    const handleChanges = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    };
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/friends', formValues)
            .then(res => {
                push('/friends');
            })
            .catch((err) => console.log(err.message));

    }

    return (
        <div>
            <h3>Add New Friend!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name</label><input id="name" name="name" value={formValues.name} onChange={handleChanges} style={{marginRight: "10px"}}></input>
                <label htmlFor="age">age</label><input id="age" name="age" value={formValues.age} onChange={handleChanges} style={{marginRight: "10px"}}></input>
                <label htmlFor="email">email</label><input id="email" name="email" value={formValues.email} onChange={handleChanges} style={{marginRight: "10px"}}></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddFriendForm;
