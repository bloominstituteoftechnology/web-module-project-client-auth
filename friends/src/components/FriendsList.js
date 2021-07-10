import React from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth().get("/data")
      .then(res => this.setState({ friendsList: res.data.data }))
      .catch(err => console.log(err));
  };
    
}

export default FriendsList;
