import { axiosWithAuth } from './axiosWithAuth'
import React from 'react'

class FriedsList extends React.Component {
    state = {
        friendsList: [],
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(response => {
            console.log(response);
            this.setState({
                friendsList: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.friendsList.map((friend) => (
                    <>
                    <h1>{friend.name}</h1>
                    <h2>{friend.age}</h2>
                    <h3>{friend.email}</h3>
                    </>
                ))

                }
            </div>
        )
    }
}
export default FriedsList