import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import IUser from './types';

// Define a type for the slice state
export type UserState = {
  users: IUser[] | undefined;
  test: string;
};

const initialState: UserState = {
  users: [],
  test: '',
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = [];
      state.test = 'cleard';
    },
  },
});

export const { setUsers, clearUsers } = homePageSlice.actions;

export default homePageSlice.reducer;
