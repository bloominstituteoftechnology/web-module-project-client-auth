import axios from "axios";

const makeRequest = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: "http://localhost:5000"
    })
}

export default makeRequest;