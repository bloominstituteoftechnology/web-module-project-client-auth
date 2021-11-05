import React, {useState} from 'react';
import axios from 'axios';

const initialFriend = {
    id: 0,
    name: '',
    age: 0,
    email: '',
}

const AddFriends = () => {
    const [friend, setFriend] = useState(initialFriend)
 
    const handleChange = e => {
         setFriend({
             ...friend,
             [e.target.name]: e.target.value
         });
     };
 
     const add = () => {
         const token = localStorage.getItem('token');
         console.log(friend);
         axios.post('http://localhost:5000/api/friends', friend, {headers: {authorization:token}})
         .then(res => {
           console.log(res);
           setFriend(res.data);
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
                   value={friend.name}
                   onChange={handleChange}
                 />
               </label>
               <label>Age
                 <input
                   type='number'
                   name='age'
                   value={friend.age}
                   onChange={handleChange}
                 />
               </label>
               <label>Email
                 <input
                   type='email'
                   name='email'
                   value={friend.email}
                   onChange={handleChange}
                 />
               </label>
               <button className='add-submit'>ADD</button>
             </form>
         </div>
     )
 }
 
 export default AddFriends; 