import axios from "axios";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL = import.meta.env.VITE_BASE_LIVE_URL;
// axios.defaults.baseURL = BASE_URL;
//  axios.defaults.withCredentials = true



const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const postHandler = async (endpoint, body) => {
  try {

    console.log("BASE_URL:", BASE_URL, endpoint);
    const response = await axios.post(`https://auth-full-backend.vercel.app${endpoint}`, body, config);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getHandler = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL + endpoint}`, config);
    return response;
  } catch (err) {
    return err;
  }
};

export const patchHandler = async (endpoint, data) => {
  try {
    const response = await axios.patch(`${BASE_URL + endpoint}`, data, config);

    return response;
  } catch (err) {
    return err;
  }
};
