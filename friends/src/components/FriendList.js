import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendList extends React.Component {
    state = {
        // friends: {
        //     id: '',
        //     name: '',
        //     age: '',
        //     email: '',
        // }
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                // console.log("AXIOS FRIENDS GET: ", res.data)
                this.setState({
                    ...this.state,
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    // addFriend = e => {
    //     this.props.history.push('/friends'); 
    // }

    render() {
        return (
            <div>
                {/* <button onClick={this.addFriend}>Add A New Friend</button> */}
                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                        <p>---------------</p>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default FriendList;