import React from 'react';
import { useHistory } from 'react-router-dom';
import Friend from './Friend';

const FriendDetail = (props) => {

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        history.push('/friends')
    }

    return ( 
        <div>
            <Friend friend={props.friend} /> );
            <button onClick={handleClick} >Get all friends</button>
        </div>
}
 
export default FriendDetail;