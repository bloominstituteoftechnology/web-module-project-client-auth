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

  //  componentDidUpdate() {
  //   this.getData();
  // }

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
        // this.setState({
        //   isLoading: true
        // })
      });
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
              <h4>Friend: {friend.name}</h4>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
              <button>Edit</button>
            </div>
          ))
        }
        </div>
    </div>
  )
}

}