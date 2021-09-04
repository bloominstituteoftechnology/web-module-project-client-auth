import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('authtoken');

    return axios.create({
        headers: {
            Authorization: token
        },
    });
};