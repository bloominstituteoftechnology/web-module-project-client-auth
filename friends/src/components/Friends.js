import React from "react";
import axiosWithAuth from "./../utils/axiosWithAuth";

class Friends extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(
          "🚀 ~ file: Friends.js ~ line 17 ~ Friends ~ .then ~ res",
          res
        );

        this.setState({
          friends: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="friends">
        {this.props.fetchingData && (
          <div className="key spinner">
            <p>Loading Data</p>
          </div>
        )}
        {this.state.friends.length > 0 && (
          <div className="friends-wrapper">
            {this.state.friends.map((friend) => (
              <p>{friend.name}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Friends;
