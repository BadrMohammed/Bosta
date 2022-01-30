import axios from "axios";

export const Request = () => {
  return axios.create({
    baseURL: "https://tracking.bosta.co",
    headers: {
      // contentType: "application/json",
    },
  });
};
