import axios from 'axios';
import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
    name: '',
    age: '',
    email: '',
}
function AddFriendForm() {
    const [formValues, setFormValues] = React.useState(initialValues);
    const handleChanges = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    }
    const handleSubmit =  e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends')
        .then(res => console.log(res))
        .catch(err => console.log({ err }))
    }
    return (
        <div>
            <h3>Add New Friend</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>name</label>
                <input id='name' name='name' value={formValues.name} onChange={handleChanges}/>
                <label htmlFor='age'>age</label>
                <input id='age' name='age' value={formValues.age} onChange={handleChanges}/>
                <label htmlFor='email'>email</label>
                <input id='email' name='email' value={formValues.email} onChange={handleChanges}/>
            </form>
        </div>
    )
}

export default AddFriendForm