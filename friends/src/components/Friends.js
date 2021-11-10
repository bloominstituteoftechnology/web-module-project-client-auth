import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AddFriend from './AddFriend';

class Friends extends React.Component {
    state ={
        friends: []
    };

    componentDidMount() {
        axiosWithAuth()
        .get('/api/friends', {
        })
        .then(res => {
            this.setState({
                ...this.state,
                friends: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    formatData = () => {
        const formattedData = [];
        this.state.friends.forEach((item, index) => {
            formattedData.push({
                id: index+1,
                name: item.name,
                age: item.age,
                email: item.email
            })
        })
        return formattedData
    }

    render(){
        const friendsList = this.formatData();
        return(
            <div>
                {friendsList.map(item => (
                    <div key={item.id} className='friends-list'>
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
                            <PrivateRoute path='/add' component={AddFriend} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
export default Friends;