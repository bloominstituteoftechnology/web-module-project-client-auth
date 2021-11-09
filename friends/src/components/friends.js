import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriend from "./addFriend";

class Friends extends React.Component {

    state = {
        list: []
    };

    componentDidMount(){
        axiosWithAuth()
        .get('/friends')
        .then(res=>{
            this.setState({
                ...this.state,
                list: res.data
            });
        })
        .catch(err=>{
            console.log(err)
        })
    }
    componentDidUpdate(){
        console.log(this.state.list)
    }
    render()
    
    {
        return(
            <div>
                {this.state.list.map(friend => {
                    return (
                    <div>
                    <h1>{friend.name}</h1>
                    <p>{friend.email}</p>
                    </div>
                    )
                })}
                {this.state.list.length > 0 && 
                    (
                    <div>
                    <h1>{this.state.list.length} Friends </h1>
                    </div>
                    )}

                <div>
                    <AddFriend />
                </div>
            </div>
        )
    }
}

export default Friends;