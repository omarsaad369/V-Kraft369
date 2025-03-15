import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1>سلة التسوق</h1>
      {cartItems.length === 0 ? (
        <p>السلة فارغة.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="product-preview" style={{ backgroundColor: item.color }}>
              {item.image && <img src={item.image} alt="Custom" className="custom-image" />}
              {item.text && <p className="custom-text">{item.text}</p>}
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>حذف</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
