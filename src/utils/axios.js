import axios from "axios";
import { apiEndPoint } from "./constant";
import { isAuthenticated } from "../localStorege/Auth";

const Instance = axios.create({
  baseURL: `${apiEndPoint}`,
  timeout: 10000,
});

Instance.interceptors.request.use(
  (config) => {
    const token = isAuthenticated();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Instance;
