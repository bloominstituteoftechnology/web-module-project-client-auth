import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from './../utils/axiosWithAuth';
// import Friend from './Friend';
import FriendForm from './FriendForm';

export default class Friends extends React.Component{
  state = {
    friends: [],
    isLoading: false
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
  
  editFriend = (id) => {
    const friend = this.state.friends.find(fr => fr.id === id)
    this.setState({...friend})
  }
 
  deleteFriend = (id) => {
    axiosWithAuth
      .delete(`/api/friends/${id}`)
      .then(res => {
        this.setState(
          this.state.friends.filter(friend => friend.id !== id)        
        )
      })
      .catch(err => {
        console.log('error: ', err.response);
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
              <button onClick={() =>this.editFriend(friend.id)}>Edit</button>
              <button onClick={()=> this.deleteFriend(friend.id)}>Delete</button>
            </div>
          ))
        }
        </div>
    </div>
  )
}

}