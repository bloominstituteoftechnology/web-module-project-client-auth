import axios from 'axios';
	

	const axiosWithAuth = ()=> {
	    const payload = localStorage.getItem('token');
	

	    return axios.create({
	        headers: {
	            authorization: payload
	        },
	        baseURL: 'http://localhost:5000/api'
	    });
	}
	

	export default axiosWithAuth;
