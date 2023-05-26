import React, {useState} from "react";
import axios from "axios";
import { defaultResponse } from "msw";
//instead of useHistory
import { useNavigate } from "react-router-dom";


export default function Login(){
    //instead of useHistory bc v6
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
//to check
console.log(formValues);


//make our call
const handleSubmit= (e) =>{
    e.preventDefault();
    console.log('Login formValues:', formValues)
    axios
        .post('http://localhost:9000/api/login', formValues)
        .then(resp=> {
            console.log('TOKEN RESPONSE', resp);
            localStorage.setItem('token', resp.data.token);
            navigate('/friends');
        })
        .catch(err=>{
            console.log(err)
        })

}


return(
<div className="Login-comp">
    <h1>LOGIN</h1>
    <form onSubmit={handleSubmit}>
        <div className="Form-container">
            <label htmlFor='username'>Username:</label>
            <input 
                id='username'
                name='username'
                onChange={handleChange}
                />
        </div>
        <div className="Form-container">
            <label htmlFor='password'>Password:</label>
            <input 
                id='password'
                name='password'
                type='password'
                onChange={handleChange}
            />
        </div>
        <button className="Subit-button">Submit</button>   
      </form>
</div>

);

}