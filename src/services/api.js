import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://192.168.2.37:3333/api/",
  headers: { "Access-Control-Allow-Origin": "*" }
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;