// استيراد createSlice من Redux Toolkit لإنشاء شريحة تخصيص المنتج
import { createSlice } from "@reduxjs/toolkit";

// ✅ الحالة الابتدائية للتخصيص
const initialState = {
  color: "#000000",  // اللون الافتراضي (أسود) - يجب أن يكون بتنسيق HEX
  text: "",          // النص المخصص، يبدأ بقيمة فارغة
  image: null,       // الصورة المخصصة، تبدأ بقيمة فارغة (null)
  font: "Arial",     // نوع الخط الافتراضي
  size: 20,          // حجم النص الافتراضي
  position: { x: 50, y: 50 }, // موضع النص الافتراضي (X و Y)
  fabric: "Cotton",  // نوع القماش الافتراضي
  productType: "T-Shirt", // نوع المنتج الافتراضي
};

// ✅ إنشاء شريحة Redux لإدارة حالة التخصيص
const customizationSlice = createSlice({
  name: "customization", // اسم الشريحة في Redux Store
  initialState, // تحديد الحالة الابتدائية
  reducers: {
    setColor: (state, action) => { 
      state.color = action.payload; // تحديث لون المنتج
    },
    setText: (state, action) => { 
      state.text = action.payload; // تحديث النص المخصص
    },
    setImage: (state, action) => { 
      state.image = action.payload; // تحديث الصورة المخصصة
    },
    setFont: (state, action) => { 
      state.font = action.payload; // ✅ تغيير نوع الخط
    },
    setSize: (state, action) => { 
      state.size = action.payload; // ✅ تغيير حجم النص
    },
    setPosition: (state, action) => { 
      state.position = action.payload; // ✅ تغيير موقع النص
    },
    setFabric: (state, action) => { 
      state.fabric = action.payload; // ✅ تغيير نوع القماش
    },
    setProductType: (state, action) => { 
      state.productType = action.payload; // ✅ تغيير نوع المنتج
    },
  },
});

// ✅ تصدير الإجراءات (Actions) لاستخدامها في المكونات الأخرى
export const { 
  setColor, 
  setText, 
  setImage, 
  setFont, 
  setSize, 
  setPosition, 
  setFabric, 
  setProductType 
} = customizationSlice.actions;

// ✅ تصدير المخفض (Reducer) لدمجه في Redux Store
export default customizationSlice.reducer;
