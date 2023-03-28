import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddFriend = () => {
    let navigate = useNavigate();
    const [form, setForm] = useState({
        name:'',
        age:'',
        email:'',
    })

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', form, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            navigate('/friends')
        })
        .catch(err => {console.error(err)})
    }

    console.log(form)
    return (
        <div>
            <h2>Add a friend</h2>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input onChange={handleChange} name ='name' id='name'></input>
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input onChange={handleChange} name='age' id='age'></input>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input onChange={handleChange} name='email' id='email'></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
  }

export default AddFriend