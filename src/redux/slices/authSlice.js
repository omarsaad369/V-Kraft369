import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, // هل المستخدم مسجل الدخول؟
  userType: null, // "seller" للبائع أو "buyer" للمشتري
  users: [], // تخزين بيانات المستخدمين
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userType = action.payload.userType;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userType = null;
    },
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { login, logout, registerUser } = authSlice.actions;
export default authSlice.reducer;
