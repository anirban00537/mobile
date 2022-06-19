import {setUser, logout} from '../reducer/user';

export const login = (user: any) => (dispatch: any) => {
  dispatch(setUser(user));
};
export const logoutUser = () => (dispatch: any) => {
  dispatch(logout());
};
