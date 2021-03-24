import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from './../utils/axiosWithAuth';
// import Friend from './Friend';
import FriendForm from './FriendForm';

export default class Friends extends React.Component{
  state = {
    friends: [],
    isLoading: false,
    isEditing: false
  };
  
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({
      isLoading: true
    })

    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data,
          isLoading: false
        });
      })
      .catch(err => {
        console.log("error: ", err.response);
      });
  }
  
  editFriend = (friendId) => {
    this.setEditing(true)
    const friend = this.state.friends.find(fr => fr.id === friendId)
    this.setState({...friend})
  }
 
  deleteFriend = (friendId) => {
    // console.log(friendId.id)
    axiosWithAuth()
      .delete(`/api/friends/${friendId.id}`, {params: {id: friendId}})
      .then(res => {
        console.log(res.data)
        this.setState(
          this.state.friends.filter(friend => friend.id !== res.data)        
        )
        this.getData()
      })
      .catch(err => {
        console.log('error: ', err.response, err.status);
    })
    
  }

  render() {
    return (
      <div >
        <FriendForm friend={this.state.friends} data={this.getData }/>
      <div className='friends-list'>
        {this.state.isLoading ? 
          <div className="key spinner">
            <Loader type='Circles' color='#00BFFF' height={100} width={100} timeout={3000}/>
            <p>Loading Data</p>
          </div>
          :
          this.state.friends.map((friend) => (
            <div className='friends-list'key={friend.id}>
              <h4>{friend.name}</h4>
              <p> {friend.age}</p>
              <p> {friend.email}</p>
              <button onClick={() =>this.editFriend(friend)}>Edit</button>
              <button onClick={(e) => {
                e.stopPropagation();
                this.deleteFriend(friend)
              }
            }>Delete</button>
            </div>
          ))
        }
        </div>
    </div>
  )
}

}