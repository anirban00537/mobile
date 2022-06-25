import request from '../utils/request';

// products/home?quantity=90

export const homeProducts = async (quantity: number = 5) => {
  const response = await request.get('products/home?quantity=' + quantity);
  return response;
};
