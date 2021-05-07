import axios from 'axios';
//COMPLETE THIS FIRST BEFORE CREATING ANY COMPONENTS
const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:5000/api', //This endpoint is the only non-boilerplate item here, you can create this and leave it empty first
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth;