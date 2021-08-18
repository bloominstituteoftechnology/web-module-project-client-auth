import React, {useState} from 'react'

export const AddNewFriend = (props) =>{
    const {addFriend} = props
    const [state, setState] = useState({
        name: "",
        age: "",
        email: ""
    })

    const handleChange = (e) =>{
       setState({
           ...state,
           [e.target.name]: e.target.value
       })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
            addFriend(state)
    }

    return (
        <div>
            <form>
                    <label>Name</label>
                    <input type="text" name="name" value={state.name} onChange={handleChange}/>
                    <label>Age</label>
                    <input type="number" name="age" value={state.age} onChange={handleChange}/>
                    <label>email</label>
                    <input type="email" name="email" value={state.email} onChange={handleChange}/>
                    <button onClick={handleSubmit}>Add friend</button>
                </form>

        </div>
    )
}