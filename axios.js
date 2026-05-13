import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000"
});

export let TOKEN = null;

export const setToken = (token) => {
  TOKEN = token;
};

// interceptor
api.interceptors.request.use((config) => {
  if (TOKEN) {
    config.headers.Authorization = `Bearer ${TOKEN}`;
  }
  return config;
});