import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendList extends React.Component {
    state = {
        friends: {
            id: '',
            name: '',
            age: '',
            email: '',
        }
    }

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                this.setState({
                    ...this.state,
                    // VERIFY PATH
                    friends: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    render() {
        return (
            <div>
                {/* VERIFY */}
                {this.state.friends.map(friend => (
                    <div key={friend.id}>
                        <p>{friend.name}</p>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                )
                )}
            </div>
        )
    }
}

export default FriendList;