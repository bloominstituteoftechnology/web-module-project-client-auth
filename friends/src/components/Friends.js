import React from 'react';
import {Link} from 'react-router-dom'
import axiosWithAuth from './../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    console.log("props:", this.props);
    
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(resp=> {
        this.setState({
          friends: resp.data
          
        });
        console.log('data', resp.data)

      })
      .catch(err=> {
        console.log(err);
      })
  }
  
  formatData = () => {
      
    const formattedData = [];
    this.state.friends.forEach((friend) => {
     
        formattedData.push({
          id: friend.id,
          name: friend.name,
          age:friend.age,
          email:friend.email
        });
      
    });
    return formattedData;
    
  };
  render() {
    const friends = this.formatData();
    console.log('friends',friends)
    return (
        <div>
      <h1>Friends</h1>
      <div>{friends.map(friend => (
          <h2>{friend.name} is {friend.age} years old, and you can reach them @ {friend.email}!</h2>
      ))}</div>
     
      <Link to='/add'>Add a new Friend!</Link>
      </div>
    );
    }
}
export default Friends;
