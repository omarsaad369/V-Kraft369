import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, // ✅ هل المستخدم مسجل الدخول؟
  userType: null, // ✅ "seller" للبائع أو "buyer" للمشتري
  user: null, // ✅ تخزين بيانات المستخدم الحالي
  users: [], // ✅ تخزين جميع المستخدمين
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ تسجيل دخول المستخدم
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userType = action.payload.userType;
      state.user = action.payload.user;
    },

    // ✅ تسجيل خروج المستخدم
    logout: (state) => {
      state.isLoggedIn = false;
      state.userType = null;
      state.user = null;
    },

    // ✅ تسجيل مستخدم جديد
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },

    // ✅ تحديث بيانات المستخدم
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },

    // ✅ ضبط بيانات المستخدم عند تحميل الصفحة
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { login, logout, registerUser, updateUser, setUser } = authSlice.actions;
export default authSlice.reducer;
