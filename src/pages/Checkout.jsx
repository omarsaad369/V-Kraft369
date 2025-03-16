import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: "",
    paymentMethod: "credit-card",
    shippingMethod: "standard",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    walletNumber: "",
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [shippingCost, setShippingCost] = useState(20);

  const handleInputChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });

    if (e.target.name === "shippingMethod") {
      setShippingCost(e.target.value === "express" ? 50 : 20);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 350), 0) + shippingCost;

  const handleConfirmOrder = () => {
    if (!shippingInfo.name || !shippingInfo.email || !shippingInfo.address || !shippingInfo.phone) {
      alert("⚠️ يرجى ملء جميع بيانات الشحن!");
      return;
    }

    localStorage.setItem("lastOrder", JSON.stringify({ cartItems, shippingInfo, totalPrice }));

    setOrderConfirmed(true);

    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  if (orderConfirmed) {
    return (
      <div className="success-container">
        <h1>🎉 تم تأكيد طلبك بنجاح!</h1>
        <p>📦 سيتم تجهيز الطلب وإرساله قريبًا.</p>
        <button onClick={() => navigate("/")} className="go-home-btn">🏠 العودة للصفحة الرئيسية</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>✅ إتمام الطلب</h1>

      <div className="shipping-form">
        <label>📛 الاسم الكامل:</label>
        <input type="text" name="name" value={shippingInfo.name} onChange={handleInputChange} required />

        <label>📧 البريد الإلكتروني:</label>
        <input type="email" name="email" value={shippingInfo.email} onChange={handleInputChange} required />

        <label>🏠 العنوان:</label>
        <input type="text" name="address" value={shippingInfo.address} onChange={handleInputChange} required />

        <label>🏙️ المدينة:</label>
        <input type="text" name="city" value={shippingInfo.city} onChange={handleInputChange} required />

        <label>📞 رقم الهاتف:</label>
        <input type="tel" name="phone" value={shippingInfo.phone} onChange={handleInputChange} required />

        {/* 📌 اختيار طريقة الدفع */}
        <label>💳 طريقة الدفع:</label>
        <select name="paymentMethod" value={shippingInfo.paymentMethod} onChange={handleInputChange}>
          <option value="credit-card">💳 بطاقة ائتمان</option>
          <option value="vodafone-cash"> فودافون كاش</option>
          <option value="etisalat-cash"> اتصالات كاش</option>
          <option value="orange-cash"> أورنج كاش</option>
          <option value="cod">💵 الدفع عند الاستلام</option>
        </select>

        {/* 📌 حقول إضافية عند اختيار بطاقة ائتمان */}
        {shippingInfo.paymentMethod === "credit-card" && (
          <>
            <label>💳 رقم البطاقة:</label>
            <input type="text" name="cardNumber" value={shippingInfo.cardNumber} onChange={handleInputChange} placeholder="**** **** **** ****" required />
            
            <label>📅 تاريخ الانتهاء:</label>
            <input type="text" name="expiryDate" value={shippingInfo.expiryDate} onChange={handleInputChange} placeholder="MM/YY" required />

            <label>🔒 رمز CVV:</label>
            <input type="text" name="cvv" value={shippingInfo.cvv} onChange={handleInputChange} placeholder="***" required />
          </>
        )}

        {/* 📌 حقول إضافية عند اختيار المحافظ الإلكترونية */}
        {(shippingInfo.paymentMethod === "vodafone-cash" ||
          shippingInfo.paymentMethod === "etisalat-cash" ||
          shippingInfo.paymentMethod === "orange-cash") && (
          <>
            <label>📱 رقم المحفظة:</label>
            <input type="text" name="walletNumber" value={shippingInfo.walletNumber} onChange={handleInputChange} placeholder="رقم الموبايل المرتبط بالمحفظة" required />
          </>
        )}

        {/* 📌 اختيار طريقة التوصيل */}
        <label>🚚 طريقة التوصيل:</label>
        <select name="shippingMethod" value={shippingInfo.shippingMethod} onChange={handleInputChange}>
          <option value="standard">🚛 شحن عادي (20 جنيه)</option>
          <option value="express">⚡ شحن سريع (50 جنيه)</option>
        </select>
      </div>

      {/* 📌 إجمالي الطلب */}
      <div className="checkout-summary">
        <h3>💰 إجمالي السعر: {totalPrice.toFixed(2)} جنيه مصري</h3>
      </div>

      {/* ✅ زر تأكيد الطلب */}
      <button onClick={handleConfirmOrder} className="confirm-order-btn">
        ✅ تأكيد الطلب
      </button>
    </div>
  );
};

export default Checkout;
