import axios from "axios";
import React, {useState} from "react";

const initialFormValues = {
    name: '',
    email: '',
    age: ''
}

const AddFriend = () => {
    const token = localStorage.getItem('token')
    const[formValues,setFormValues] = useState(initialFormValues)

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
        axios.create({ headers: { Authorization: token}})
        .post(`http://localhost:9000/api/friends`, formValues)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    return(
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type='text'
                name="name"
                value={formValues.name}
                onChange={(e) => handleChange(e)}
                />
                <input 
                type='number'
                name="age"
                value={formValues.age}
                onChange={(e) => handleChange(e)}
                />
                <input 
                type='email'
                name="email"
                value={formValues.email}
                onChange={(e) => handleChange(e)}
                />
            <button >Submit</button>
        </form>
        </>
    )

}

export default AddFriend;