import request from '../utils/request';

export const me = async () => {
  const response = await request.get('/me');
  return response;
};
export const login = async (user: any) => {
  const response = await request.post('/login', user);
  return response;
};

export const register = async (user: any) => {
  const response = await request.post('/register', user);
  return response;
};
