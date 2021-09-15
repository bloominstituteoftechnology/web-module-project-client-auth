import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AddFriends from './AddFriends';


class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        axios.get('http://localhost:5000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res);
                this.setState({
                    ...this.state,
                    friends: res.data
                })

            })
            .catch(err => {
                console.log(err);
            })
    }

    formatData = () => {
        const formattedData = [];
        this.state.friends.forEach((item, index) => {

            formattedData.push = ({

                id: index + 1,
                name: item.name,
                age: item.age,
                email: item.email

            })
        })

        return formattedData
    }

    render() {
        const friendsList = this.formatData();
        return (
            <div>

                {friendsList.map(item => (

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

                            <ProtectedRoute path='/add' component={AddFriends} />

                        </Switch>

                    </div>

                </Router>

            </div>
           
        )
    }

}

export default Friends;