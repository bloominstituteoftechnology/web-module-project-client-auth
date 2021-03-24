import React,{useEffect, useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'


const FriendsList = props => {

    const person = {
        name:'',
        age:'',
        email:''
    }

    const [friend,setFriend] = useState(person)
    const [listOfFriends, setListOfFriends] = useState([])

    const handleChange = (e) => {
        setFriend({...friend, [e.target.name]:e.target.value})
      }



    const handleSubmit = (e) =>{
        e.preventDefault();
        
        axiosWithAuth().post('api/friends',friend)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.response)
        })

        axiosWithAuth().get('/api/friends')
        .then(res => {
            setListOfFriends(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }



    

    useEffect (() => {
        axiosWithAuth().get('/api/friends')
        .then(res => {
            setListOfFriends(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    },[])
  
    useEffect (() => {
        console.log(listOfFriends)
    },[listOfFriends])

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label>name</label>
        <input name='name' type='text' maxLength='25' onChange={handleChange}/>
        <label>age</label>
        <input name='age' type='number' min='0' max='110' onChange={handleChange}/>
        <label >email</label>
        <input name='email' type='email' onChange={handleChange}/>
        <button>Submit</button>
        </form>
        {listOfFriends.map(fr => {
            return(<div key={fr.id}>
                <p>{fr.name}</p>
                <p>{fr.age}</p>
                <p>{fr.email}</p>
            </div>)
        })}
        </div>
    )
}

export default FriendsList