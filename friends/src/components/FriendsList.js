import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'
import '../styles.css'
import { AddNewFriend } from './AddNewFriend'

class FriendsList extends React.Component {
    state = {
        newFriends :[ ]
    }

    componentDidMount(){
        this.getFriends()

    }

    getFriends = () =>{
        axiosWithAuth().get('/friends')
        .then(res=>{
            console.log(res)
            this.setState({
                newFriends: res.data
            })
        })
        .catch(err =>{
            console.log(err)
         })

    }

    addFriend = (friend)=>{
        axiosWithAuth().post('/friends', friend)
        .then(res=>{
            console.log(res)
            this.setState({
                ...this.state,
                newFriends: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="title-wrapper">
                {this.state.newFriends.map(index=>{
                   return <div className="key" key={index.id}>
                       <p className="top-title">{index.name}</p>
                       <p className="gas-wrapper">{index.age}</p>
                       <p className="bottom-title">{index.email}</p>
                   </div> 
                })}
                <AddNewFriend addFriend={this.addFriend}/>
            </div>

        )
    }
}
export default FriendsList;