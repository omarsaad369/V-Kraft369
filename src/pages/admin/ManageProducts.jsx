import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ManageProducts = () => {
  const products = useSelector((state) => state.products.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(products)) {
      setLoading(false);
    }
  }, [products]);

  if (loading) return <p>Loading...</p>;

  // 🔹 التحقق من أن المنتجات ليست فارغة أو غير معرفة
  if (!products || !Array.isArray(products)) {
    return <p>⚠️ No products available</p>;
  }

  return (
    <div>
      <h2>Manage Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
