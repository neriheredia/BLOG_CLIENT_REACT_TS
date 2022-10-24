import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { clearLocalStorage, saveLocalStorage } from '@/utilities';
import { IUser } from '../../models/user.model';

interface StateProp {
  currentUser: IUser | null;
  error: boolean;
  loading: boolean;
}

export const initialState: StateProp = {
  currentUser: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') as string)
    : null,
  error: false,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUserStart: (state) => {
      state.loading = true;
    },
    registerUserSuccess: (state) => {
      state.loading = false;
    },
    registerUserFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginUserStart: (state) => {
      state.loading = true;
    },
    loginUserSuccess: (state, { payload }: PayloadAction<IUser>) => {
      state.loading = false;
      state.currentUser = payload;
      saveLocalStorage('user', payload);
    },
    loginUserFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logoutSuccess: (state) => {
      state.currentUser = null;
      clearLocalStorage('user');
      clearLocalStorage('access-token');
    },
  },
});

export const {
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
  loginUserStart,
  loginUserSuccess,
  loginUserFailure,
  logoutSuccess,
} = userSlice.actions;
