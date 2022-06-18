import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export type UserType = {
  user: {};
  isLoggedIn: boolean;
};

const initialState: UserType = {
  user: {},
  isLoggedIn: false,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserType, action: PayloadAction<UserType>) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    logout: (state: UserType) => {
      state.user = {};
      state.isLoggedIn = false;
    },
  },
});
export const {setUser, logout} = userSlice.actions;
export default userSlice.reducer;
