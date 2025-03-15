import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css"; 
import { auth } from "../firebaseConfig"; 
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ التحقق مما إذا كان المستخدم مسجل دخول بالفعل
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/"); // ✅ إعادة التوجيه للصفحة الرئيسية
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // تصفير الأخطاء قبل محاولة تسجيل الدخول

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // ✅ إعادة التوجيه للصفحة الرئيسية بعد تسجيل الدخول
    } catch (err) {
      setError(`❌ Invalid email or password: ${err.message}`); // ✅ عرض رسالة الخطأ بشكل واضح
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignIn}>
        <div className="input-group">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="input-group">
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
