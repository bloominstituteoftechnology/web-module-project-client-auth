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
                <FriendForm addFriend={this.addFriend}/>
            </div>
        )
    }
}

export default FriendsList
