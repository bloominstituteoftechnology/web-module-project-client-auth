import axios from 'axios'
import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendForm from './FriendForm'

export class FriendsList extends Component {
    state = {
        friends: []
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        axiosWithAuth().get('/friends')
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
        // this.setState({
        //     ...this.state,
        //     friends: [...this.state.friends, friend]
        // })
        axiosWithAuth().post('/friends', friend)
        .then(res => {
            console.log(res)
            this.getData()
        })
        .catch(err => {
            console.log(err.response)
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
