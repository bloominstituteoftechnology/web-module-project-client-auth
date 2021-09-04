import { useState } from 'react'

const Login = (props) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleChanges = (e) => {

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form>
                <label htmlFor="username">
                    <input type="text" placeholder="Enter Username" />
                </label>
                <label htmlFor="password">
                    <input type="password" placeholder="Enter Password" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;