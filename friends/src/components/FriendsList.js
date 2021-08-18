import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from './Friend';
import { AddFriendForm } from './AddFriendForm'

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        console.log("Friend.js componentDidMount 5x5");
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("/friends")
            .then((res) => {
                this.setState({
                    ...this.state,
                    friends: res.data
                });
                console.log('This is getData res.data: ', res.data);
            })
    }

    addFriend = (friend) => {
        axiosWithAuth()
            .post("/friends", friend)
            .then(res => {
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(`YO Error: `, err)
            })
    }

    render() {
        const { friends } = this.state;
        return (
            <div className="friends-container">
                {/* {friends.map(friend => {
                    return (
                        <div key={friend.id} className="friend">
                            <p>Name: {friend.name}, {friend.age}</p>
                            <p>email: {friend.email}</p>
                        </div>
                    )
                })} */}
                {
                    this.state.friends.map(friend => {
                        return <Friend key={friend.id} friend={friend} />
                    })
                }
                <AddFriendForm addFriend={this.addFriend} />
            </div>
        )
    };
}
export default FriendsList;
