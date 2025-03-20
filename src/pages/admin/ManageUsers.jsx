import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/userSlice";
import { FaTrashAlt, FaUser } from "react-icons/fa"; // استخدام أيقونات لإضافة تأثير بصري
import "../../styles/manageUsers.css"; // التأكد من وجود هذا الملف للتصميم

const ManageUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    // محاكاة تحميل البيانات
    setTimeout(() => {
      setLoading(false); // إيقاف التحميل بعد 2 ثانية
    }, 2000);
  }, []);

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  if (loading) {
    return (
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>  
      </div>
    ); // عرض مؤشر تحميل
  }

  if (!Array.isArray(users) || users.length === 0) {
    return <p className="no-users">No users found.</p>; // عرض رسالة في حال عدم وجود مستخدمين
  }

  return (
    <div className="manage-users-container">
      <h2 className="page-title">👥 Manage Users</h2>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <FaUser className="user-icon" />
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleDelete(user.id)}
            >
              <FaTrashAlt /> Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
