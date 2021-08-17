import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friends: []
    };
        
    componentDidMount() {
        console.log("Friends");
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get("/friends")
        .then((res)=>{
            this.setState({friends: res.data});
            console.log('');
        })
    }
    render() {
        const  { friends } = this.state;
        return (
            <div className="friends-container">
                {friends.map (friend => {
                    return(
                    <div key={friend.id} className="friend">
                        <p>Name: {friend.name}, {friend.age}</p>
                        <p>email: {friend.email}</p>
                    </div>
                )})}
            </div>
        )};
    }
    export default FriendsList;
