import axios from "axios";

const axiosWithAuth = () => {
  // returns a new "instance" of axios with the
  // config object built into it
  return axios.create({
    headers: {
      Authorization: JSON.parse(window.localStorage.getItem("token")),
    },
    baseURL: "http://localhost:5000",
  });
};

export default axiosWithAuth;
