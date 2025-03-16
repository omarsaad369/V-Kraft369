// استيراد المكتبات المطلوبة
import React, { useEffect, useState, useRef, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setText, setImage } from "../redux/slices/customizationSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { SketchPicker } from "react-color";
import Draggable from "react-draggable";
import "../styles/customize.css";
import Product3D from "../components/Product3D";

// 📌 مكون النص القابل للتحريك باستخدام forwardRef
const DraggableText = forwardRef(({ text }, ref) => (
  <Draggable nodeRef={ref}>
    <p ref={ref} className="custom-text">{text}</p>
  </Draggable>
));

const Customize = () => {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const [templates, setTemplates] = useState([]);
  const [show3DPreview, setShow3DPreview] = useState(false);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // 📌 تحميل القوالب الجاهزة من JSON
  useEffect(() => {
    fetch("/templates.json")
      .then((res) => res.json())
      .then((data) => setTemplates(data))
      .catch((err) => console.error("❌ Error loading templates:", err));
  }, []);

  // 📌 تغيير اللون
  const handleColorChange = (color) => {
    dispatch(setColor(color.hex));
  };

  // 📌 تحديث النص
  const handleTextChange = (e) => {
    dispatch(setText(e.target.value));
  };

  // 📌 تحميل صورة مخصصة
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => dispatch(setImage(reader.result));
      reader.readAsDataURL(file);
    }
  };

  // 📌 إضافة المنتج إلى السلة
  const handleAddToCart = () => {
    const customizedProduct = {
      id: Date.now(),
      color: customization.color,
      text: customization.text,
      image: customization.image,
    };
    dispatch(addToCart(customizedProduct));
  };

  // 📌 مشاركة التصميم عبر رابط خاص
  const shareDesign = () => {
    const params = new URLSearchParams({
      color: customization.color,
      text: customization.text,
      image: customization.image,
    });

    const shareUrl = `${window.location.origin}/customize?${params.toString()}`;
    navigator.clipboard.writeText(shareUrl);
    alert("📎 Link copied! Share it with others.");
  };

  return (
    <div className="customize-container">
      <h1>🎨 Customize Your Product</h1>

      {/* 📌 خيارات التخصيص */}
      <div className="customization-options">
        <label>🎨 Choose Product Color:</label>
        <SketchPicker color={customization.color} onChange={handleColorChange} />

        <label>✍️ Add Custom Text:</label>
        <input type="text" value={customization.text} onChange={handleTextChange} placeholder="Enter text here" />

        <label>📷 Upload Custom Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* 📌 عرض المعاينة */}
      <div className="preview">
        <h2>👀 Preview</h2>
        <div className="product-preview" style={{ backgroundColor: customization.color }}>
          {/* صورة قابلة للتحريك */}
          {customization.image && (
            <Draggable nodeRef={imageRef}>
              <img ref={imageRef} src={customization.image} alt="Custom" className="custom-image" />
            </Draggable>
          )}

          {/* نص قابل للتحريك */}
          {customization.text && <DraggableText text={customization.text} ref={textRef} />}
        </div>
      </div>

      {/* 📌 اختيار القوالب الجاهزة */}
      <div className="templates">
        <h2>🖼️ Choose a Template</h2>
        <div className="template-grid">
          {templates.map((template) => (
            <div key={template.id} className="template-item" onClick={() => dispatch(setImage(template.image))}>
              <img src={template.image} alt={template.name} />
              <p>{template.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 📌 معاينة ثلاثية الأبعاد */}
      {show3DPreview && <Product3D />}

      {/* 📌 الأزرار الرئيسية */}
      <div className="button-container">
        <button className="toggle-3d-btn" onClick={() => setShow3DPreview((prev) => !prev)}>
          🔄 Toggle 3D View
        </button>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          🛒 Add to Cart
        </button>
        <button className="share-btn" onClick={shareDesign}>
          🔗 Share Design
        </button>
      </div>
    </div>
  );
};

export default Customize;
