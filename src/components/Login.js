import React, {useState} from "react";
import axios from "axios";
import { defaultResponse } from "msw";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        username:"",
        password:""
    });

//when we type, it'll handle the change
const handleChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
}
//check
// console.log(formValues);


//make our call
const handleSubmit= (e) =>{
    e.preventDefault();
    console.log('formValues:', formValues)
    axios
        .post('http://localhost:9000/api/login', formValues)
        .then(resp=> {
            console.log(resp);
            localStorage.setItem('token', resp.payload);
            navigate('/friends');
        })
        .catch(err=>{
            console.log(err)
        })

}


return(
<div className="container">
    <h2>LOGIN</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='username'>Username:</label>
            <input 
                id='username'
                name='username'
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor='password'>Password:</label>
            <input 
                id='password'
                name='password'
                type='password'
                onChange={handleChange}
            />
        </div>
        <button>Submit</button>   
      </form>
</div>

);

}