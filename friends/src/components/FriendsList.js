import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {

  state = {
    friends: []
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
        console.log(this.state.friends)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render(){
    return(
      <>
        Friends
      </>
    );
  };
}

export default FriendsList;