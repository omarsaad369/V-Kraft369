// استيراد مكتبة React لإنشاء التطبيق
import React from "react";  
// استيراد ReactDOM لإنشاء جذر التطبيق في DOM
import ReactDOM from "react-dom/client";  
// استيراد Provider من Redux لتمكين الوصول إلى Redux Store في التطبيق
import { Provider } from "react-redux";  
// استيراد Redux Store الذي يحتوي على جميع البيانات وإعدادات Redux
import store from "./redux/store";  
// استيراد المكون الرئيسي للتطبيق
import App from "./App";  
// استيراد ملف التنسيقات (CSS) لتطبيق الأنماط العامة
import "./styles/global.css";  
// إنشاء جذر التطبيق داخل عنصر HTML الذي يحمل المعرف "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  // لفّ التطبيق بالكامل داخل Provider حتى يتمكن كل مكون من الوصول إلى Redux Store
  <Provider store={store}>  
    <App /> {/* تشغيل التطبيق داخل Redux */}
  </Provider>
);