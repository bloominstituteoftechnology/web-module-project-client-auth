import { useState } from 'react'


const Login = () => {


	const [state, setState] = useState({

		name: '',
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

	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>
					<input
						name='name'
						value={state.name}
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