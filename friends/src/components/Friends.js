import React, {useState} from "react";
import axios from "axios";
import friends from '../../../server';
import Friend from './Friend'

const initialState = {
    id: 1,
    name: '',
    age: 30,
    email: '' 
}

const Friends = () => {
    const [friends, setFriends] = useState(initialState);

    const handleChange = (e) => {
        setFriends({
            ...friends,
            [e.target.name]: e.target.value,
        });
      };

      const addNewFriend = (e) => {
        e.preventDefault();
        axios
          .post("http://localhost:5000/api/friends", friends)
          .then((res) => {
            window.localStorage.setItem("token", JSON.stringify(res.data.payload));
            this.props.history.push("/protected");
          })
          .catch((err) => console.log(err));
      };

      return (
          <form>
              {friends.map(friend => {return (<Friend/>)})}
              <label htmlFor="name">Enter a new friend</label>
              <input id='name' name='name' type='text' value={friends.name} onChange={handleChange}/>
              <label htmlFor="age">How old are they?</label>
              <input id='age' name='age' type ='text' value={friends.age} onChange={handleChange}/>
              <label htmlFor="email">Email?</label>
              <input id='email' name='email' type ='email' value={friends.email} onChange={handleChange}/>
              <button onClick={addNewFriend}>submit</button>
          </form>
      )
}
export default Friends;