import { createSlice } from '@reduxjs/toolkit';
import operations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  isRefreshUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(operations.logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(operations.logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(operations.refreshCurrentUser.pending, state => {
        state.isRefreshUser = true;
      })
      .addCase(operations.refreshCurrentUser.rejected, state => {
        state.isRefreshUser = false;
      })
      .addCase(
        operations.refreshCurrentUser.fulfilled,
        (state, { payload }) => {
          state.user = payload;
          state.isLoggedIn = true;
          state.isRefreshUser = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
