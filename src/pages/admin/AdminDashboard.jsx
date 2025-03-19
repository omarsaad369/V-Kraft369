import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admin.css"; // استيراد التنسيقات

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/products">📦 Manage Products</Link></li>
          <li><Link to="/admin/orders">📜 Manage Orders</Link></li>
          <li><Link to="/admin/users">👥 Manage Users</Link></li>
          <li><Link to="/">🏠 Back to Store</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <h1>Welcome to Admin Dashboard</h1>
        <div className="admin-stats">
          <div className="stat-box">🛒 Orders: <strong>120</strong></div>
          <div className="stat-box">👥 Users: <strong>300</strong></div>
          <div className="stat-box">💰 Revenue: <strong>$5,000</strong></div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
