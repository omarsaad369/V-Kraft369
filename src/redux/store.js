// ✅ استيراد configureStore من Redux Toolkit لإنشاء المتجر
import { configureStore } from "@reduxjs/toolkit";

// ✅ استيراد المخفضات (reducers) الخاصة بالإدارة المركزية للبيانات
import productReducer from "./slices/productSlice"; 
import customizationReducer from "./slices/customizationSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice"; // ✅ إدارة المستخدمين
import orderReducer from "./slices/orderSlice"; 
import userReducer from "./slices/userSlice"; // ✅ إدارة بيانات المستخدمين

// ✅ إنشاء المتجر باستخدام configureStore وتحديد المخفضات المستخدمة
const store = configureStore({
  reducer: {
    products: productReducer, // ✅ إدارة المنتجات
    customization: customizationReducer, // ✅ إدارة التخصيصات
    cart: cartReducer, // ✅ إدارة سلة التسوق
    auth: authReducer, // ✅ إدارة بيانات المستخدم
    orders: orderReducer, // ✅ إدارة الطلبات
    users: userReducer, // ✅ إضافة إدارة المستخدمين
  },
});

// ✅ تصدير المتجر لاستخدامه في التطبيق
export default store;
