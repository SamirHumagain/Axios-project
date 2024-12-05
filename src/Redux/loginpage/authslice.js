import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthentication: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthentication = true;
      state.user = action.payload;
      state.error = null;
    },

    loginFailure: (state, action) => {
      state.isAuthentication = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthentication = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;
