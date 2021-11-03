import axios from "axios";
import { axiosWithAuth } from "./axiosAuth";

export const getFriends = () => {
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then((res) => {
      console.log(res.data);
    });
};

export const getFriend = () => {
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then((res) => {
      console.log(res.data);
    });
};
