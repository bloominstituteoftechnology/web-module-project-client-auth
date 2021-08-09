import axios from "axios";

export const axiosWithAuth = () => {
  const token = "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ";

  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      authorization: token,
    },
  });
};
