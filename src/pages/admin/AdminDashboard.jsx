import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admin.css"; // استيراد التنسيقات
import { FaChartLine, FaBoxes, FaUsers, FaCog } from "react-icons/fa"; // أيقونات إضافية

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/admin/products"><FaBoxes /> Manage Products</Link></li>
          <li><Link to="/admin/orders"><FaChartLine /> Manage Orders</Link></li>
          <li><Link to="/admin/users"><FaUsers /> Manage Users</Link></li>
          <li><Link to="/admin/settings"><FaCog /> Settings</Link></li>
          <li><Link to="/">🏠 Back to Store</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <h1>Welcome to Admin Dashboard</h1>

        {/* Stats Boxes */}
        <div className="admin-stats">
          <div className="stat-box">
            <h3>🛒 Orders</h3>
            <strong>120</strong>
          </div>
          <div className="stat-box">
            <h3>👥 Users</h3>
            <strong>300</strong>
          </div>
          <div className="stat-box">
            <h3>💰 Revenue</h3>
            <strong>$5,000</strong>
          </div>
        </div>

        {/* Sections */}
        <section className="admin-sections">
          <div className="section-box">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/admin/products">📦 Manage Products</Link></li>
              <li><Link to="/admin/orders">📜 Manage Orders</Link></li>
              <li><Link to="/admin/users">👥 Manage Users</Link></li>
              <li><Link to="/admin/settings">⚙️ Settings</Link></li>
            </ul>
          </div>

          <div className="section-box">
            <h3>Recent Activity</h3>
            <ul>
              <li><strong>Order #120</strong> was placed on <span>10/10/2025</span></li>
              <li><strong>User #300</strong> registered on <span>09/15/2025</span></li>
              <li><strong>Product #15</strong> added to the catalog on <span>08/20/2025</span></li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="admin-footer">
          <p>© 2025 VKraft Admin Dashboard. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default AdminDashboard;
