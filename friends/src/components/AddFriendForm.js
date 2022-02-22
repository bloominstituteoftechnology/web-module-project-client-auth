import axiosWithAuth from '../utils/axiosWithAuth';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router';

export default function AddFriendForm(props) {

  const initialFormValues = {
      name: '',
      email:'',
      age:''
  }

  const initialFriends = []

  const [friends, setFriends] = useState(initialFriends)
  const [formValues, setFormValues] = useState(initialFormValues)

  const { push } = useHistory();
  const postNewFriend = newFriend => {
    axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
    .then(res =>{
      setFriends([res.data, ...friends]);
      setFormValues(initialFormValues);
      push('/protected')
    }).catch(err => {
      setFormValues(initialFormValues);
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

        const newFriend = {
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          age: formValues.age.trim(),
        }
        postNewFriend(newFriend);
  }

  const onChange = evt => {
    const { name, value } = evt.target;
    const valueToUse = value;
    setFormValues({
        ...formValues,
        [name]: valueToUse
      })
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
      </div>

      <div className='form-group inputs'>
        <label>Name:&nbsp;
          <input
            value={formValues.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>
        
        <label>&nbsp;Email:&nbsp;
          <input
            value={formValues.email}
            onChange={onChange}
            name='email'
            
          />
        </label>
        <label>&nbsp;Age:&nbsp;
          <input
            type='text'
            onChange={onChange}
            value={formValues.age}
            name='age'
          >
              
          </input>
          <button id='submitBtn' >Submit</button>
        </label>
        
      </div>

      
    </form>
  )
}