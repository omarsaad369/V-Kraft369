import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaDoorOpen, FaBars, FaSearch } from "react-icons/fa";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "../styles/navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // 📌 إغلاق القائمة عند النقر خارجها
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      unsubscribe();
    };
  }, []);

  // ✅ تسجيل الخروج
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  // ✅ توجيه المستخدم للصفحات المحمية
  const handleProtectedRoute = (path) => {
    user ? navigate(path) : navigate("/signin");
  };

  // ✅ البحث عند الضغط على الزر أو Enter
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      {/* ✅ زر الأقسام مع قائمة منسدلة */}
      <div className="hamburger-menu" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <FaBars className="menu-icon" /> <span>Categories</span>
        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} ref={menuRef}>
          <li><Link to="/3d-printing" onClick={() => setDropdownOpen(false)}>🖨️ 3D Printing</Link></li>
          <li><Link to="/dtf-clothing" onClick={() => setDropdownOpen(false)}>👕 DTF Printing</Link></li>
          <li><Link to="/accessories" onClick={() => setDropdownOpen(false)}>🎁 Accessories Printing</Link></li>
        </ul>
      </div>

      {/* ✅ الشعار */}
      <div className="logo">
        <Link to="/">
          <img src="src/assets/icons/Logo_V-Kraft.png" alt="Logo" className="logo-img" />
          <img src="src/assets/icons/LogO V Kraft.png" alt="Logo" className="logo-word" />
        </Link>
      </div>

      {/* ✅ مربع البحث */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search VKraft..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>

      {/* ✅ القائمة */}
      <ul ref={menuRef} className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <li><button className="btn-link" onClick={() => handleProtectedRoute("/sell")}>Sell Online</button></li>
        <li><button className="btn-link" onClick={() => handleProtectedRoute("/order")}>Order for Yourself</button></li>

        {/* ✅ حساب المستخدم */}
        {user ? (
          <li className="user-menu">
            <Link to="/user-profile" className="user-info">
              <FaUser /> {user.displayName ? user.displayName.split(" ").slice(0, 2).join(" ") : "User"}
            </Link>
            <button className="signout-btn" onClick={handleSignOut}>
              <FaDoorOpen /> Sign Out
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/signin" className="signin-btn"><FaUser /> Sign In</Link></li>
            <li><Link to="/signup" className="signup-btn"><FaUser /> Sign Up</Link></li>
          </>
        )}

        {/* ✅ إضافة روابط لوحة التحكم فقط إذا كان المستخدم مدير */}
        {user && user.email === "omarsaad01007342123@gmail.com" && (
          <div className="admin-menu">
          <div className="admin-dropdown">
            <button className="admin-btn">Admin</button>
            <div className="admin-links">
              <Link to="/admin" className="admin-link">🏠 Dashboard</Link>
              <Link to="/admin/products" className="admin-link">📦 Manage Products</Link>
              <Link to="/admin/orders" className="admin-link">📑 Manage Orders</Link>
              <Link to="/admin/users" className="admin-link">👥 Manage Users</Link>
            </div>
          </div>
        </div>
        )}

        <li><Link to="/cart" className="cart-icon"><FaShoppingCart /></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
