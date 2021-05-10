import axios from "axios";

export const AxiosWithAuth = () => {
    return axios.create({
        baseURL: "http://localhost:5000/api",
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}