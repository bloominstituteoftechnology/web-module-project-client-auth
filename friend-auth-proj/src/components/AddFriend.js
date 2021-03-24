
import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'

const AddFriend = (props) => {

    const location= useLocation()

    const initialState= {
        name:'',
        age:'',
        email:'',
    }

    const [values, setValues] = useState(initialState)

    const onChange = (e)=> {
        const{name,value} = e.target
        setValues({...values, [name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.submit(values)
        setValues(initialState)
    }
    return(
        <div>
            <form onSubmit={onSubmit}>

                <input
                type='text'
                placeholder='Name'
                name='name'
                value={values.name}
                onChange={onChange}/>

                <input
                type='text'
                placeholder='Age'
                name='age'
                value={values.age}
                onChange={onChange}/>

                <input
                type='text'
                placeholder='Email'
                name='email'
                value={values.email}
                onChange={onChange}/>

                <button>{location.pathname==='/friends'? 'Add Friend' : 'Save Changes'}</button>

            </form>
        </div>
    )
}

export default AddFriend