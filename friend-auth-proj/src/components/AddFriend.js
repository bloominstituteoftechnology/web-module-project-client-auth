
import React, {useState} from 'react'

const AddFriend = (props) => {

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

                <button>Add Friend</button>

            </form>
        </div>
    )
}

export default AddFriend