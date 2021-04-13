import axios from "axios";

export const fetching = ({url}) => {
  const baseUrl = url;

  axios.get(baseUrl).then(reply => console.log( reply ))
    .catch(error => console.log(error));

}