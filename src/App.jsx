
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // استيراد المكون
import SignUp from "./pages/SignUp"; // ✅ استيراد صفحة التسجيل
import SignIn from "./pages/SignIn";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // حالة البحث
  return (
    <Provider store={store}>
      <Router>
        <Navbar setSearchQuery={setSearchQuery} /> {/* تمرير دالة البحث إلى Navbar */}
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} /> {/* ✅ إضافة المسار */}
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <ScrollToTop /> {/* إضافة زر العودة للأعلى */}
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
