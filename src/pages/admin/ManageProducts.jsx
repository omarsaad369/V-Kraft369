import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../styles/ManageProducts.css";

const ManageProducts = () => {
  const products = useSelector((state) => state.products.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(products)) {
      setLoading(false);
    }
  }, [products]);

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
    );
  }

  if (!products || !Array.isArray(products) || products.length === 0) {
    return <p className="error-message">⚠️ No products available</p>;
  }

  return (
    <div className="manage-products-container">
      <h2>🛒 Manage Products</h2>

      {/* زر إضافة منتج جديد */}
      <button className="add-product-btn">➕ Add New Product</button>

      <table className="products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>📸 Image</th>
            <th>📝 Name</th>
            <th>💰 Price</th>
            <th>⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id || index}>
              <td>{index + 1}</td>
              <td>
                <img src={product.image} alt={product.name} className="product-img" />
              </td>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <button className="edit-btn">✏️ Edit</button>
                <button className="delete-btn">🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
