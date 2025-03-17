import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";
import SellOnline from "./pages/SellOnline";
import OrderForYourself from "./pages/OrderForYourself";
import UserProfile from "./pages/UserProfile";
import FAQ from "./pages/FAQ"; // استيراد صفحة FAQ
import ContactUs from "./pages/ContactUs"; // استيراد صفحة Contact Us
import AboutUs from "./pages/AboutUs"; // استيراد صفحة About Us

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Provider store={store}>
      <Router>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sell" element={<SellOnline />} />
          <Route path="/order" element={<OrderForYourself />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/faq" element={<FAQ />} /> {/* المسار الجديد للـ FAQ */}
          <Route path="/contact-us" element={<ContactUs />} /> {/* صفحة تواصل معنا */}
          <Route path="/about-us" element={<AboutUs />} /> {/* صفحة عن المتجر */}
        </Routes>
        <ScrollToTop />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
