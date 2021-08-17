import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res)=>{
        this.setState({friends: res.data})
      })
  };
  render() {
    const {friends} = this.state;
    return (
      <div>
          {friends.map (friend => {
              return(
                  <div key={friend.id}>
                    <h4>Name: {friend.name}</h4>
                    <h4>Age: {friend.age}</h4>
                    <h4>Email: {friend.email}</h4>
                  </div>
              )
          })}
      </div>
    );
  }
}

export default Friends;