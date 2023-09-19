import axios from "axios";

const BASE_URL = "http://localhost:7000/api";

axios.defaults.baseURL = BASE_URL;

const config = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const API = {
  get: (url) => axios.get(BASE_URL + url, config),
  post: (url, data) => axios.post(BASE_URL + url, data, config),
  put: (url, data) => axios.put(BASE_URL + url, data, config),
  delete: (url) => axios.delete(BASE_URL + url, config),
};

const API_URL = "http://localhost:7000/api";

export { API, API_URL };
