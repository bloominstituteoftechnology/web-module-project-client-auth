import axios from 'axios'
import React, { Component } from 'react'
import FriendForm from './FriendForm'

export class FriendsList extends Component {
    state = {
        friends: []
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then((res) => {
            console.log(res.data)
            this.setState({
                friends: res.data
            })
        })
        .catch((err) => {
            console.log(err.response)
        })
    }
    addFriend = (friend) => {
        this.setState({
            ...this.state,
            friends: [...this.state.friends, friend]
        })
    }
    render() {
        return (
            <div>
                {this.state.friends.map((friend) => {
                    return <div>{friend.name}, {friend.age}</div>
                })}
                <FriendForm addFriend={this.addFriend}/>
            </div>
        )
    }
}

export default FriendsList
