import request from '../utils/request';

// products/home?quantity=90

export const homeProducts = async (quantity: number = 5, catagory: string) => {
  const response = await request.get(
    'products/home?quantity=' + quantity + '&catagory=' + catagory,
  );
  return response;
};
