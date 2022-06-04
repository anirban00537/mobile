import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.0.108:3000';

axios.interceptors.request.use((config: any) => {
  config.headers.Authorization = '';
  return config;
});

axios.interceptors.response.use(response => {
  return response;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      //   localStorage.removeItem('token');
      //   window.location.reload();
    }
    return Promise.reject(error);
  },
);
