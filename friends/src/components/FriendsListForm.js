import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {FriendsList} from './FriendsList';


 class FriendsListForm extends React.Component {
     state = {
         friends: []
     };

     componentDidMount() {
         this.getData();
     }

     getData = () => {
         axiosWithAuth()
         .get('/api/friends')
         .then(res => {
             console.log(res);
         })
         .catch(err => {
             console.log(err.response)
         })
     }

    render(){
        return (
            <div>
                FriendsListForm
                <FriendsList />
            </div>
        );
    }
};

export default FriendsListForm