// استيراد configureStore من Redux Toolkit لإنشاء المتجر
import { configureStore } from "@reduxjs/toolkit";
// استيراد المخفضات (reducers) الخاصة بإدارة المنتجات، التخصيص، وسلة التسوق
import productReducer from "./slices/productSlice";
import customizationReducer from "./slices/customizationSlice";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice"; // ✅ استيراد مخزن المستخدمين

// إنشاء المتجر باستخدام configureStore وتحديد المخفضات المستخدمة
const store = configureStore({
  reducer: {
    products: productReducer,
    customization: customizationReducer,
    cart: cartReducer,
    auth: authReducer, // ✅ إضافة المخزن إلى Redux
  },
});

// تصدير المتجر حتى يمكن استخدامه في التطبيق
export default store;
