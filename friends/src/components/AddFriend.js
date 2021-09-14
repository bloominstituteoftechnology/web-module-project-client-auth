import React, {useState} from 'react';
import axios from 'axios';
import './Add.css'

const initialCred = {
        id: 0,
        name: '',
        age: 0,
        email: '',
}


const AddFriend = (props) => {
   const [cred, setCred] = useState(initialCred)

   const handleChange = e => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        });
    };

    const add = () => {
        const token = localStorage.getItem('token');
        console.log(cred);
        axios.post('http://localhost:5000/api/friends', cred, {headers: {authorization:token}})
        .then(res => {
          console.log(res);
          setCred(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    }
    return(
        <div className='add-friend'>
            <form onSubmit={add}>
              <label>Name
                <input
                  type='text'
                  name='name'
                  value={cred.name}
                  onChange={handleChange}
                />
              </label>
              <label>Age
                <input
                  type='number'
                  name='age'
                  value={cred.age}
                  onChange={handleChange}
                />
              </label>
              <label>Email
                <input
                  type='email'
                  name='email'
                  value={cred.email}
                  onChange={handleChange}
                />
              </label>
              <button className='add-submit'>ADD</button>
            </form>
        </div>
    )
}

export default AddFriend;