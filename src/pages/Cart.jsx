import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ تعيين السعر الافتراضي لكل منتج (350 جنيه مصري)
  const updatedCartItems = cartItems.map(item => ({
    ...item,
    price: item.price || 350
  }));

  // ✅ حساب إجمالي السعر
  const totalPrice = updatedCartItems.reduce((total, item) => total + item.price, 0);

  // ✅ تأكيد قبل حذف المنتج
  const handleRemove = (id) => {
    if (window.confirm("❌ هل أنت متأكد من حذف هذا المنتج؟")) {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <div className="cart-container">
      <h1>🛍️ سلة التسوق</h1>
      {updatedCartItems.length === 0 ? (
        <p className="empty-cart">السلة فارغة.</p>
      ) : (
        <>
          {/* ✅ شبكة المنتجات */}
          <div className="cart-items-grid">
            {updatedCartItems.map((item) => (
              <div key={item.id} className="cart-item">
                {/* ✅ معاينة المنتج */}
                <div className="product-preview" style={{ backgroundColor: item.color }}>
                  {item.image && <img src={item.image} alt="Custom" className="custom-image" />}
                  {item.text && <p className="custom-text">{item.text}</p>}
                </div>
                {/* ✅ اسم المنتج والسعر */}
                <div className="cart-details">
                  <p>{item.name || "منتج مخصص"}</p>
                  <p>💲 {item.price} جنيه مصري</p>
                </div>
                {/* ✅ زر الحذف مع تأكيد */}
                <button onClick={() => handleRemove(item.id)} className="delete-btn">
                  ❌ حذف
                </button>
              </div>
            ))}
          </div>

          {/* ✅ عرض إجمالي الطلب */}
          <div className="cart-total">
            <h3>إجمالي السعر: 💰 {totalPrice.toFixed(2)} جنيه مصري</h3>
          </div>

          {/* ✅ زر إتمام الطلب بعرض أكبر */}
          <button onClick={() => navigate("/checkout")} className="checkout-btn">
            ✅ إتمام الطلب
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
