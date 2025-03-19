import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;
      const order = state.orders.find((order) => order.id === id);
      if (order) {
        order.status = status;
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter((order) => order.id !== action.payload);
    },
  },
});

export const { addOrder, updateOrderStatus, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
