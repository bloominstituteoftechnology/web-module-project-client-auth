import React from 'react';
import axios from 'axios';

import Friend from './Friend';

class FriendsList extends React.Component {

  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  

  getData = () => {
    axios.get('http://localhost:5000/api/friends', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then((res) => {
        console.log(res);
        this.setState({
          friends: res.data
        });
        // console.log(this.state.friends)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render(){
    return(
      <div className='friends'>
        {this.state.friends.length === 0 ? 
        (<h3>Loading</h3>) : 
        // (this.state.friends.forEach((friend) => {
        //   <div key={friend.id}>{friend.name}</div>
        // }))
        this.state.friends.forEach((friend) =>
        <Friend friend={friend} />
        )}
        {/* Friends */}
      </div>
    );
  };
}

export default FriendsList;