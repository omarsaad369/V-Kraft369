import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // التأكد من أن users هي مصفوفة
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload); // إضافة مستخدم جديد
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload); // حذف المستخدم
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
