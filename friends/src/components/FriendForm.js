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
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addfriend({
            ...friend,
            id: Date.now(),
        })
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
               </form> 
        </div>
    )
}


export default FriendForm
