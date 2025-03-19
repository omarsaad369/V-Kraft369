// استيراد createSlice من Redux Toolkit لإنشاء slice خاص بالمنتجات
import { createSlice } from "@reduxjs/toolkit";  

// الحالة الأولية (Initial State) التي تحتوي على قائمة المنتجات
const initialState = {  
  products: [  
    { id: 1, name: "تيشيرت أسود", price: 100, image: "src/assets/images/tshirt.png" }, // منتج 1
    { id: 3, name: "هودي أبيض", price: 150, image: "src/assets/images/hoodie.png" },  // منتج 2
    { id: 4, name: "بلوفر رمادي", price: 350, image: "src/assets/images/بلوفر رمادي.png" },  // منتج 2
    { id: 5, name: "سويت شيرت أزرق", price: 250, image: "src/assets/images/سويت شيرت أزرق.png" },  // منتج 2
    { id: 6, name: "بلوفر خفيف أحمر", price: 450, image: "src/assets/images/بلوفر خفيف أحمر.png" },  // منتج 2
    { id: 7, name: "قميص طويل أزرق", price: 200, image: "src/assets/images/قميص طويل أزرق.png" },  // منتج 2
    { id: 8, name: "جاكيت رياضي أبيض", price: 360, image: "src/assets/images/جاكيت رياضي أبيض.png" },  // منتج 2
  ],  
};

// إنشاء Slice جديد لإدارة المنتجات باستخدام createSlice
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;