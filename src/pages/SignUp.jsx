import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; 
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";
import "../styles/auth.css"; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ تحديث البيانات عند الكتابة
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ التحقق من صحة الإدخال
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ إرسال البيانات عند الضغط على الزر
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        await updateProfile(userCredential.user, { displayName: formData.fullName }); // ✅ تحديث الاسم في الحساب
        navigate("/"); // ✅ إعادة التوجيه للصفحة الرئيسية بعد النجاح
      } catch (error) {
        alert("❌ Error: " + error.message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser className="icon" />
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
        </div>
        {errors.fullName && <span className="error">{errors.fullName}</span>}

        <div className="input-group">
          <FaEnvelope className="icon" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        {errors.email && <span className="error">{errors.email}</span>}

        <div className="input-group">
          <FaLock className="icon" />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        {errors.password && <span className="error">{errors.password}</span>}

        <div className="input-group">
          <FaLock className="icon" />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
