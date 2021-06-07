import React, { Component } from 'react';
import Axios from 'axios';

// import '../styles/Friend.css';

class FriendsList extends Component {

    state = {
        friends: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const token = localStorage.getItem('token');
        Axios.get('http://localhost:3000/api/friends', {
            headers: {
                authorization: token
            }
        }).then(res => {
            console.log(res);
            this.setState({
                friends: res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <h2>Friends List</h2>
                <h3>This Page is Protected!</h3>
                {
                    this.state.friends.map(friend => {
                        return (
                            <div key={friend.id} className='friend'>
                                <p id='name'>{friend.name}</p>
                                <p id='age'>{friend.age}</p>
                                <p id='email'>{friend.email}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

};

export default FriendsList;