import axios from "axios";

const AxiosInstance = axios.create({
  // baseURL: "https://ks-api.vercel.app/api/v1",
  baseURL: "http://localhost:5000/api/v1",
  timeout: 10000,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers["Content-Type"] = "application/json";
      const token = localStorage.getItem("ks-user-token");
      if (token) config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AxiosInstance;
