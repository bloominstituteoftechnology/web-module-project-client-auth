import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

const AddFriend = () => {
    const [form, setForm] = useState({
        name: "",
        age: "",
        email: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post("friends", form)
            .then(res => {
                navigate("/friends")
            }).catch(err => console.log(err))
    }
    return (
        <div>
            <h1>AddFriend Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Friend Name:
                        <input id="name" onChange={handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Friend Email:
                        <input id="email" type="email" onChange={handleChange}></input>
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input id="age" type="number" onChange={handleChange}></input>
                    </label>
                </div>
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default AddFriend;