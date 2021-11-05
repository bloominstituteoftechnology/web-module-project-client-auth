import React, {useState} from 'react'
import { useHistory } from 'react-router';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
    name: '',
    age: '',
    email: '',
}

export default function AddFriend() {
    const { push } = useHistory();
    const [formValues, setFormValues] = useState(initialValues);
    const handleChanges = e => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', formValues)
            .then((res) =>{ push ('/friends')})
            .catch(err => console.log({err}));
    };

    return (
        <div>
            <h2> Add Friend From</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input id='name' name='name' value={formValues.name} onChange={handleChanges}/>
                <label htmlFor='age'>Age:</label>
                <input id='age' name='age' value={formValues.age} onChange={handleChanges}/>
                <label htmlFor='email'>Email:</label>
                <input id='email' name='email' value={formValues.email} onChange={handleChanges}/>
                <button>Add Friend</button>
            </form>
        </div>
    )
}
