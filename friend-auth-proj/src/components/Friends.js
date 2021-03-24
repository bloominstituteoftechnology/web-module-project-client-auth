
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AddFriend from './AddFriend'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Friends = (props) => {

    const [friendslist, setFriendsList] = useState([])

    useEffect(()=>{
        axiosWithAuth()
            .get(`http://localhost:5000/api/friends`)
            .then(res=>{
                console.log(res)
                setFriendsList(res.data)
            })
            .catch(err=>console.log(err))
    },[])

    const submit = (object) => {
        const newfriend = {...object}
        axiosWithAuth()
            .post(`http://localhost:5000/api/friends`, newfriend)
            .then(res => {
                console.log(res)
                setFriendsList(res.data)
            })
            .catch(err=>{console.log(err)})
    }

    return(
        <div>
        
            <div>
            {
            friendslist.length===0 ? (<h2>Loading...</h2>) : 
            <ul>{friendslist.map( item => <li key={item.id}><Link to={`/friends/${item.id}`}> { item.name} </Link></li>)}
            </ul>
            }
            </div>



            <AddFriend submit={submit}/>
        </div>
    )
}

export default Friends