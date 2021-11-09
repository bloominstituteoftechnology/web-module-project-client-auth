import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from '../utilitites/axiosWithAuth';
import { setFriends } from '../actions';
import Friend from './Friend';

const FriendsList = (props) =>{
    useEffect(()=> {
        axiosWithAuth()
            .get('/friends')
            .then(resp=>{
                props.dispatch(setFriends(resp.data))
            })
    }, []);

    const friends = props.state.friends

    return(<div className="friendlist">
        {
        friends.map(item=>{
            return <Friend friend={item} key={item.id}/>
        })
        }
    </div>);
}
const mapStateToProps=state=>{
    return{
       state
    }
}
export default connect(mapStateToProps)(FriendsList);