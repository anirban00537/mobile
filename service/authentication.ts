import request from '../utils/request';

export const check = async () => {
  const response = await request.get('/');
  return response;
};
export const login = async (user: any) => {
  const response = await request.post('/login', user);
  return response;
};
