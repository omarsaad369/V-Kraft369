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

  return (
    <nav className="navbar">
      <div className="logo">
      <img src="src/assets/icons/Logo V-Kraft.png" alt="Logo" className="logo-img" />
        <Link to="/">VKraft</Link>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search VKraft" />
      </div>

      <div className="menu">
        <Link to="/sell">Sell online</Link>
        <Link to="/order">Order for yourself</Link>
      </div>

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
