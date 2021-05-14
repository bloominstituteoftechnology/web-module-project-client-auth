import React, { useState } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function NewFriendForm () {
    const [friend, setFriend ] = useState({
        name: "",
        age: "",
        email: ""
    })

    const history = useHistory();

    const handleChange = e => {
        setFriend({...friend, [e.target.name] : e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth().post("/friends", friend)
            .then(res => {
                console.log(res);
                history.push("/friends");
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name: 
                    <input name="name" value={friend.name} onChange={handleChange} />
                </label><br/>
                <label htmlFor="age">Age:
                    <input name="age" value={friend.age} onChange={handleChange} />
                </label><br/>
                <label htmlFor="email">Email:
                    <input name="email" value={friend.email} onChange={handleChange} />
                </label><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewFriendForm