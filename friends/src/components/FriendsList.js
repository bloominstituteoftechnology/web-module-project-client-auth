import React from 'react';
import {axiosWithAuth} from '../axiosWithAuth/axiosWithAuth'

class FriendsList extends React.Component {
    state = {
        friendsList: [],
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
        .get("/friends/:id")
        .then((res) => {
            this.setState({friendsList: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    };

    render() {

        return (
            <div>
                <h2>Added Friends</h2>
                {/* {friends.map (friend => {
                    return(
                        <div key={friend.id}>
                            <h3>Name: {friend.name}</h3>
                            <h3>Age: {friend.age}</h3>
                            <h3>Email: {friend.email}</h3>
                        </div>
                    )                 
                })} */}
            </div>
        );
    };
};

export default FriendsList;