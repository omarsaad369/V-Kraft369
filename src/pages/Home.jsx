import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";

const Home = ({ searchQuery }) => {
  const products = useSelector((state) => state.products.products);

  // تصفية المنتجات بناءً على البحث
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) // البحث بدون حساسية لحالة الأحرف
  );

  return (
    <div className="home-container">
      <h1>منتجاتنا</h1>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>لا توجد منتجات مطابقة لبحثك</p>
        )}
      </div>
    </div>
  );
};

export default Home;
