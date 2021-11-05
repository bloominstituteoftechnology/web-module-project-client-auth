import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Login = () => {


	const history = useHistory()
	const [state, setState] = useState({
		
			username: '',
			password: ''

	}
	)

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:5000/api/login', state)
			.then(res => {localStorage.setItem('token', res.data.payload)})
			.catch(err => { console.log(err) })
		history.push('/protected')
		setState({
			username:'',
			password:''
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>
					<input
						name='username'
						value={state.username}
						placeholder='userName'
						onChange={handleChange}
					/>
				</label>
				<label htmlFor='password'>
					<input
						name='password'
						type='password'
						value={state.password}
						placeholder='******'
						onChange={handleChange}
					/>
				</label>
				<button>Login</button>
			</form>
		</div>
	)
}

export default Login