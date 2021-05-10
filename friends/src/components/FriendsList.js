import React from 'react';
import Loader from 'react-loader-spinner';
import { AxiosWithAuth } from '../utils/AxiosWithAuth';

class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  // headers should look like:
  // {Authorization: "token"}
  getData = () => {
    AxiosWithAuth().get("/data")
      .then(res => 
        console.log(res)
        //this.setState({friendsList: res.data.data})
        )
      .catch(err => console.log(err));
  };

  formatData = () => {
    const formattedData = [];
    this.state.friends.forEach((name, id, arr) => {
      if (name === '') {
        formattedData.push({
          id: id,
          name: name.name,
          age: arr[id + 1].name
        });
      }
    });
    return formattedData;
  };

  render() {
    const friends = this.formatData();
    return (
      <div className="gas-prices">
        <div className="title-wrapper">
         
        </div>
        {this.props.isLoading && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {friends.length > 0 && (
          <div className="friend-wrapper">
            <div className="columns">
              
              <div>
                {friends.map(friend => (
                  <div key={friend.id} className="friend-graph">
                    <div className="age">
                      <p>{friend.age}</p>
            
               </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FriendsList;