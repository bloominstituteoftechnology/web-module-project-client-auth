import React, { Component } from "react";
// import moment from "moment";
// import Loader from "react-loader-spinner";
import axiosWithAuth from "./../utils/axiosWithAuth";

class FriendsList extends React.Component {
  state = {
    friendsList: [],
  };

  componentDidMount() {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res);
        this.setState({ friendsList: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.friendsList.map((friend) => (
          <div key={friend.id} className="friend">
            <h1>Friends List</h1>
            <p>Id: {friend.id}</p>
            <p>Name:{friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email:{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
