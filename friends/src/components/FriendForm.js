import React, {useState} from 'react'

const FriendForm = (props) => {
    const [friend, setFriend] = useState({
        name: '',
        id: '',
        email: '',
        age:''
    })
    const onChange = (e) => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newFriend = {
            ...friend,
            id: Date.now()
        }
        props.addFriend(newFriend)
    }
    return (
        <div>
            <h1>New Friend</h1>
           <form onSubmit={handleSubmit}>
               <label htmlFor='name'>Name</label>
               <input type='text' name='name' id='name' value={friend.name} onChange={onChange}/>

               <label htmlFor='email'>Email</label>
               <input type='email' name='email' id='email' value={friend.email} onChange={onChange}/>

               <label htmlFor='age'>Age</label>
               <input type='text' name='age' id='age' value={friend.age} onChange={onChange}/>
               <button>submit</button>
               </form> 
        </div>
    )
}


export default FriendForm
