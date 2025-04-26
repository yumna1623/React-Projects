import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // making this reducer to update the state
  reducers: {
    handleLogin: (state) => {
      state.isLoggedin = true;
      state.user = { email: "yumna@gmail.com", password: "yumna123" };
    },
    handleLogout: (state) => {
      state.isLoggedin = false;
      state.user = null;
    },
  },
});

export const { handleLogin, handleLogout } = authSlice.actions;
export default authSlice.reducer;
