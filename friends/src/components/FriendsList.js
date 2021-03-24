import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendsListForm from './FriendsListForm'
import {Friend} from './Friend';


 class FriendsList extends React.Component {
     state = {
         friends: []
     };

     componentDidMount(state) {
         this.getData();
     };

     componentDidUpdate(state) {
         this.getData(state);
     };

     getData = () => {
         axiosWithAuth()
         .get('/api/friends')
         .then(res => {
             this.setState({friends: res.data})
         })
         .catch(err => {
             console.log(err.response)
         })
     }

    render(){
        return (
            <div>
                <div className='friendsListForm Container'>
                    <FriendsListForm  />                </div>
                <div className='friendList'>
                    {
                        this.state.friends.map(friend => 
                            <Friend key={friend.id} friend={friend} />
                        )
                    }
                </div>
            </div>
        );
    }
};

export default FriendsList