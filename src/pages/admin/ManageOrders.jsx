import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaEdit, FaTrashAlt, FaBoxOpen } from "react-icons/fa";
import "../../styles/ManageProducts.css";

const ManageProducts = () => {
  const products = useSelector((state) => state.products.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(products)) {
      setLoading(false);
    }
  }, [products]);

  if (loading) return (
    <div className="pyramid-loader">
      <div className="wrapper">
        <span className="side side1" />
        <span className="side side2" />
        <span className="side side3" />
        <span className="side side4" />
        <span className="shadow" />
      </div>  
    </div>
  );

  // ✅ التحقق من أن المنتجات ليست فارغة أو غير معرفة
  if (!products || !Array.isArray(products) || products.length === 0) {
    return <p className="error-message">⚠️ No products available</p>;
  }

  return (
    <div className="manage-products-container">
      <h2>🛒 Manage Products</h2>

      <table className="products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Category</th>
            <th>Price ($)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td className="product-info">
                <img src={product.image || "default-image.png"} alt={product.name} className="product-image" />
                {product.name}
              </td>
              <td>{product.category || "N/A"}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <button className="edit-btn"><FaEdit /> Edit</button>
                <button className="delete-btn"><FaTrashAlt /> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {products.length === 0 && (
        <div className="no-products">
          <FaBoxOpen className="empty-icon" />
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
