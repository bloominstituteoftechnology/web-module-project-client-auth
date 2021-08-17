import React from 'react';
import axiosWithAuth from "./../utils/axiosWithAuth";

class Friends extends React.Component {
    state  = {
        friends:[]
    }

    componentDidMount() {
        console.log("MOUNTING HERE");
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            this.setState({
                ...this.state,
                friends: res.data
            })
        })

        .catch(err => {
            console.log(err);
        })

    }

    render() {
        return(
        <div>
            {
             this.state.friends.map((thing) => {
                < >
                    <p>{thing.name}</p>
                    <p>{thing.email}</p>
                    <p>{thing.age}</p>
                </>
             })
            }
        </div>
        )}


}

export default Friends;