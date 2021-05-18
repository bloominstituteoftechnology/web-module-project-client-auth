import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';

class FriendsList extends React.Component {

    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res);
                this.setState({
                    ...this.state,
                    friends: [...res.data]                
                });
            })
            .catch(err => {
                console.log(err.response);
            });
    };

    render() {
        return(
            <div>
                <AddFriend getFriends={this.getFriends} friends={this.state.friends}/>
                {this.state.friends.map((friend)=>{
                    return(
                        <div className = "friend-list">
                            <p className = "name"> {friend.name}</p>
                            <div className = "info">
                            <p className = "age"> Age: {friend.age}</p>
                            <p className = "email"> Email: {friend.email}</p>
                            </div>
                        </div>    
                    )
                })}
            </div>
        )
    }
}

export default FriendsList; 