import React,{useState} from 'react'
import axios from 'axios'


const Login = (props) => {

    const initialCreds={
        username:'',
        password:''
    }

    const [creds,setCreds]=useState(initialCreds)

    const onChange = (e)=>{
        const {name,value} = e.target
        setCreds({...creds, [name]:value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:5000/api/login', creds)
            .then(res=>{
                //console.log(res)
                const token = res.data.payload
                localStorage.setItem('token', token)
                console.log(props.history)
            })
            .catch(err=> console.log(err))
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                name='username'
                value={creds.username}
                placeholder='Username'
                onChange={onChange}/>

                <input
                type='password'
                name='password'
                placeholder='Password'
                value={creds.password}
                onChange={onChange}/>

                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login