import React from "react";
import { axiosWithAuth } from "./axiosWithAuth";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class NewFriend extends React.Component {
  state = {
    friend: {
      id: Date.now,
      name: "",
      age: "",
      email: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value,
      },
    });
  };

  addFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", this.state.friend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.friend);
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.friend.name}
          />
          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={this.handleChange}
            value={this.state.friend.age}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.friend.email}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default NewFriend;
