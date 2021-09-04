import { useHistory } from "react-router";

const PrivateComponent = (props) => {
    const history = useHistory()
    const logOut = () => {
        localStorage.removeItem('authtoken')
        history.push('/login')
    }

    return (
        <div>
            <h1>This is private data</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default PrivateComponent;