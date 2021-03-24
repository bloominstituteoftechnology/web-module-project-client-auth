import React,{useState,useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useLocation} from 'react-router-dom'
import AddFriend from './AddFriend'

const Friend = (props) => {

    //console.log(useLocation())
    const location = useLocation()
    const [friend,setFriend]=useState({})
    const [form,setForm]=useState(false)

    console.log(props)

    useEffect(()=>{
        setForm(false)
    },[friend])

    useEffect(()=>{

        axiosWithAuth()
            .get(`api/friends/${props.match.params.id}`)
            .then(res => setFriend(res.data))
            .catch(err=>console.log(err))
        
    },[props.match.params.id])

    const editFriend = (object) =>{

        const updateFriend = {
            id: friend.id,
            name: object.name === '' ? friend.name : object.name,
            age: object.age ==='' ? friend.age : object.age,
            email: object.email === '' ? friend.email : object.email
        }

        axiosWithAuth()
        .put(`api${location.pathname}`, updateFriend)
        .then(res => {
            console.log(res)
            setFriend(res.data[friend.id - 1])
        })
        .catch(err=>console.log(err))

    }

    return(
        <div>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>

           <button onClick={()=>{setForm(!form)}}>Edit</button>
            <button>Delete</button>

            {form===true && <AddFriend submit={editFriend}/>}
            
        </div>
    )
}

export default Friend