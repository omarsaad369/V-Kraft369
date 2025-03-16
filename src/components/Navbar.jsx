import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaDoorOpen } from "react-icons/fa";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  const handleProtectedRoute = (path) => {
    if (user) {
      navigate(path); // ✅ إذا كان المستخدم مسجل، انتقل إلى الصفحة المطلوبة
    } else {
      navigate("/signin"); // ❌ إذا لم يكن مسجلًا، انتقل إلى صفحة تسجيل الدخول
    }
  };

  return (
    <nav className="navbar">
      {/* ✅ الشعار */}
      <div className="logo">
      <Link to="/"><img src="src/assets/icons/Logo_V-Kraft.png" alt="Logo" className="logo-img" /></Link>
        <Link to="/"><img src="src/assets/icons/LogO V Kraft.png" alt="Logo" className="logo-img1" /></Link>
      </div>

      {/* ✅ مربع البحث */}
      <div className="search-bar">
        <input type="text" placeholder="Search VKraft" />
      </div>

      {/* ✅ القائمة */}
      <div className="menu">
        <button className="btn-link" onClick={() => handleProtectedRoute("/sell")}>Sell Online</button>
        <button className="btn-link" onClick={() => handleProtectedRoute("/order")}>Order for Yourself</button>
      </div>

      {/* ✅ حساب المستخدم */}
      <div className="account-options">
        {user ? (
          <div className="user-menu">
            <span className="user-info">
              <FaUser /> {user.displayName ? user.displayName.split(" ").slice(0, 2).join(" ") : "User"}
            </span>
            <button className="signout-btn" onClick={handleSignOut}>
              <FaDoorOpen /> Sign Out
            </button>
          </div>
        ) : (
          <>
            <Link to="/signin" className="signin-btn">
              <FaUser /> Sign In
            </Link>
            <Link to="/signup" className="signup-btn">
              <FaUser /> Sign Up
            </Link>
          </>
        )}
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
