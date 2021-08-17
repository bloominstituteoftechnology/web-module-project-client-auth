import axios from 'axios';

const axiosWithAuth=()=>{
    const token = localStorage.getItem('token');
    console.log(token)
    return axios.create({
        headers: {
            authorization: token
        },
        baseUrl: "http://localhost:5000/api"
    });
}

export default axiosWithAuth