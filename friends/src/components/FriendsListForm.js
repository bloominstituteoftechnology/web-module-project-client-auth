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
             this.setState({friends: res.data})
         })
         .catch(err => {
             console.log(err.response)
         })
     }

    render(){
        return (
            <div>
                <form>
                    form
                    
                </form>
                <div className='friendList'>
                    {
                        this.state.friends.map(friend => 
                            <FriendsList key={friend.id} friend={friend} />
                        )
                    }
                </div>
            </div>
        );
    }
};

export default FriendsListForm