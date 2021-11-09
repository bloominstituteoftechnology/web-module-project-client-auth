import React from 'react';
import axiosWithAuth from './../utilitis/axiosWithAuth';


class FriendsList extends React.Component {
    state = {
        friendsList: []
    }

    componentDidMount(){
        this.getData()
    }

    getData = () =>{
        axiosWithAuth()
            .get('/friends/:id')
            .then(res =>{
                console.log(res)
                // this.setState({
                //     friendsList: res.friends.freinds
                // })
            })
            .catch(err =>{
                console.log(err)
            })
    }
    render(){
        return(
            <div className = 'friendslist'>
                <h1>Cast of Friends!</h1>
                {/* {friendsList.map()} */}
            </div>
        )
    }
}

export default FriendsList