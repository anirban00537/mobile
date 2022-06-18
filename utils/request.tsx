import axios from 'axios';

const service = axios.create({
  baseURL: 'http://192.168.0.106:5000',

  headers: {
    Accept: 'application/json',
  },
});

service.interceptors.request.use(config => {
  // const token
  // if (token) {
  // config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

service.interceptors.response.use(response => {
  return response;
});

export default service;
