import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const service = axios.create({
  baseURL: 'http://192.168.0.107:5000',

  headers: {
    Accept: 'application/json',
  },
});

service.interceptors.request.use(async (config: any) => {
  const token = await AsyncStorage.getItem('token');
  console.log(token, 'token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

service.interceptors.response.use(response => {
  return response;
});

export default service;
