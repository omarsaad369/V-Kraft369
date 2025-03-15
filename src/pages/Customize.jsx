// استيراد React لإنشاء المكون
import React from "react";

// استيراد useDispatch و useSelector من Redux للتعامل مع الحالة العامة
import { useDispatch, useSelector } from "react-redux";

// استيراد الإجراءات (Actions) من Redux لتحديث حالة التخصيص
import { setColor, setText, setImage } from "../redux/slices/customizationSlice";

// استيراد إجراء إضافة المنتج إلى السلة
import { addToCart } from "../redux/slices/cartSlice";

// استيراد ملف الـ CSS لتنسيق الصفحة
import "../styles/customize.css";

// إنشاء مكون Customize
const Customize = () => {
  const dispatch = useDispatch(); // تعريف الدالة لإرسال الإجراءات إلى Redux
  const customization = useSelector((state) => state.customization); // جلب حالة التخصيص من Redux

  // 📌 دالة لتغيير اللون عند اختيار المستخدم لونًا جديدًا
  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value)); // إرسال اللون الجديد إلى Redux
  };

  // 📌 دالة لتحديث النص الذي يدخله المستخدم
  const handleTextChange = (e) => {
    dispatch(setText(e.target.value)); // إرسال النص الجديد إلى Redux
  };

  // 📌 دالة لتحميل صورة من المستخدم
  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // الحصول على الملف المختار
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setImage(reader.result)); // إرسال الصورة إلى Redux بعد تحويلها إلى Base64
      };
      reader.readAsDataURL(file); // قراءة الصورة
    }
  };

  // 📌 دالة لإضافة المنتج المخصص إلى سلة التسوق
  const handleAddToCart = () => {
    const customizedProduct = {
      id: Date.now(), // تعيين رقم فريد لكل منتج مخصص
      color: customization.color,
      text: customization.text,
      image: customization.image,
    };
    dispatch(addToCart(customizedProduct)); // إرسال المنتج إلى Redux
    alert("🎉 Product added to cart!"); // إشعار المستخدم بإضافة المنتج للسلة
  };

  return (
    <div className="customize-container">
      <h1> Customize Your Product</h1> {/* عنوان الصفحة */}

      {/* 📌 قسم التخصيص */}
      <div className="customization-options">
        <label>🎨 Choose Product Color:</label>
        <input type="color" value={customization.color} onChange={handleColorChange} /> {/* اختيار اللون */}

        <label>✍️ Add Custom Text:</label>
        <input type="text" value={customization.text} onChange={handleTextChange} placeholder="Enter text here" /> {/* إدخال نص مخصص */}

        <label>📷 Upload Custom Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} /> {/* رفع صورة مخصصة */}

        <label>🔠 Font Type:</label>
        <select>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
        </select> {/* اختيار نوع الخط */}

        <label>🔢 Font Size:</label>
        <input type="number" placeholder="Enter font size" /> {/* تحديد حجم الخط */}

        <label>📜 Fabric Type:</label>
        <select>
          <option value="Cotton">Cotton</option>
          <option value="Polyester">Polyester</option>
          <option value="Silk">Silk</option>
        </select> {/* اختيار نوع القماش */}

        <label>👕 Product Type:</label>
        <select>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Sweater">Sweater</option>
        </select> {/* اختيار نوع المنتج */}
      </div>

      {/* 📌 قسم المعاينة */}
      <div className="preview">
        <h2>👀 Preview</h2> {/* عنوان قسم المعاينة */}
        <div className="product-preview" style={{ backgroundColor: customization.color }}>
          {/* عرض الصورة المخصصة إن وجدت */}
          {customization.image && <img src={customization.image} alt="Custom" className="custom-image" />}
          {/* عرض النص المخصص إن وجد */}
          {customization.text && <p className="custom-text">{customization.text}</p>}
        </div>
      </div>

      {/* 📌 زر إضافة المنتج إلى السلة */}
      <button className="add-to-cart-btn" onClick={handleAddToCart}>🛒 Add to Cart</button>
    </div>
  );
};

export default Customize; // تصدير المكون لاستخدامه في باقي أجزاء الموقع
