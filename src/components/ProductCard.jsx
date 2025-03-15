import React from "react";
import { Link } from "react-router-dom";
import "../styles/productCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">
        <span>جنية</span> {product.price}
      </p>
      <Link to="/customize">
        <button>تخصيص المنتج</button>
      </Link>
    </div>
  );
};

export default ProductCard;
