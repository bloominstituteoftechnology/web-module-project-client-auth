import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        setTimeout(() => {
          this.setState({
            friends: res.data,
          });
        }, 1000);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <h1>
          Amigos!
          {this.state.friends.map((friend) => {
            return friend.name;
          })}
        </h1>
      </div>
    );
  }
}

export default FriendList;
