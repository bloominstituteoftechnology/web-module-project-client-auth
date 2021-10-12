import React from "react";
import axios from "axios";
import server from "./server.js"

export default function Friends({ friends }) {

    const data = friends.name

    return (
        <div>
            <h1>Your Friends</h1>
            <p>{data}</p>
        </div>
    )
}
