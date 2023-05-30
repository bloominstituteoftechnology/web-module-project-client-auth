import React, {useState} from 'react';
import axios from 'axios';
//instead of useHistory
import { useNavigate } from "react-router-dom";

const AddFriend = () => {
    //instead of useHistory bc v6
    const navigate = useNavigate();

    //state for each label info. look at inspect - data to check properties in the objects and write it below
    const [form, setForm] =useState({
      name: '',
      age: '',
      email: ''
    });

    const handleChange = (e) => {
      setForm({
        ...form, 
        [e.target.name]:e.target.value
      });
    }

    //check state 
    console.log('form state', form);

    //handle submit - add to form
    const handleSubmit = (e) => {
      console.log('here')
      e.preventDefault();
      const token = localStorage.getItem('token');
      axios
        .post(
          'http://localhost:9000/api/friends',
          form,
          {headers: {
            authorization: token
          }
          })
        .then(resp=>{
          console.log('ADDED NEW',resp);
          navigate('/friends/add');
        })
        .catch(err=>{
          console.log('ADDING ERROR', err)
        })
    }



    return(
    <div>
      <h2>ADDFRIEND</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input
              onChange={handleChange}
              id='name'
              name='name'
              
            />
        </div>
        <div>
            <label htmlFor='age'>Age:</label>
            <input 
              onChange={handleChange}
              id='age'
              name='age'
              
            />
        </div>
        <div>
            <label htmlFor='email'>Email:</label>
            <input 
              onChange={handleChange}
              id='email'
              name='email'
             
            />
        </div>
        <button
        >Submit</button>   
      </form>
    </div>
    );
    
  }

  export default AddFriend;