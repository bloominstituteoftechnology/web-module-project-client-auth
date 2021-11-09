import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AddFriend from './AddFriend';
import './Friends.css';
class Firends extends React.Component {
    state = {
        firends: []
    };

    componentDidMount() {
        axiosWithAuth()
        .get('/api/friends', { 
        })
        .then(res => {
            this.setState({
                ...this.state,
                firends: res.data
            })
        }).catch(err => {
            console.error(err);
        })
    }
    formatData = () => {
        const formattedData = [];
        this.state.firends.forEach((item, index) => {
            formattedData.push({
                id: index + 1,
                name: item.name,
                age: item.age,
                email: item.email
            })
        })
        return formattedData;
    }
    
    render(){
        const firendsList = this.formatData();
        return(
            <div>
              {firendsList.map(item => (
                  <div key={item.id} className='friend-list'>
                      <div className='friend-card'>
                          <h4>{item.name}</h4>
                          <p>{item.age}</p>
                          <p>{item.email}</p>
                      </div>
                  </div>
              ))}
              <Router>
                  <div>
                  <Link to='/add'>Add Friends</Link>
                  <Switch>
                    <PrivateRoute path='/add' component={AddFriend}/>
                  </Switch>
                  </div>
              </Router>
            </div>
        )
    }
}

export default Firends;