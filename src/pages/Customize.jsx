import React, { useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor, setText, setImage, setSize, setFabric } from "../redux/slices/customizationSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { SketchPicker } from "react-color";
import Draggable from "react-draggable";
import "../styles/customize.css";

const Customize = () => {
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [customSize, setCustomSize] = useState("");
  const [shouldSuggestSize, setShouldSuggestSize] = useState(false);

  // 📌 تغيير اللون
  const handleColorChange = useCallback((color) => {
    dispatch(setColor(color.hex));
  }, [dispatch]);

  // 📌 تحديث النص
  const handleTextChange = useCallback((e) => {
    dispatch(setText(e.target.value));
  }, [dispatch]);

  // 📌 تحميل صورة مخصصة
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5000000) { // فحص حجم الصورة (5MB)
      const reader = new FileReader();
      reader.onloadend = () => dispatch(setImage(reader.result));
      reader.readAsDataURL(file);
    } else {
      alert("❌ Image size exceeds 5MB");
    }
  };

  // 📌 تحديث المقاس
  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    dispatch(setSize(selectedSize));

    // 📌 إذا كان المستخدم يختار "مقاس مخصص"، نعرض مربع الإدخال
    if (selectedSize === "custom") {
      setShouldSuggestSize(true);
    } else {
      setShouldSuggestSize(false);
    }
  };

  // 📌 تحديث نوع القماش
  const handleFabricChange = (e) => {
    dispatch(setFabric(e.target.value));
  };

  // 📌 إضافة المنتج إلى السلة
  const handleAddToCart = useCallback(() => {
    const customizedProduct = {
      id: Date.now(),
      color: customization.color,
      text: customization.text,
      image: customization.image,
      size: customization.size,
      fabric: customization.fabric,
    };
    dispatch(addToCart(customizedProduct));
  }, [dispatch, customization]);

  // 📌 مشاركة التصميم عبر رابط خاص
  const shareDesign = () => {
    const params = new URLSearchParams({
      color: customization.color,
      text: customization.text,
      image: customization.image,
      size: customization.size,
      fabric: customization.fabric,
    });

    const shareUrl = `${window.location.origin}/customize?${params.toString()}`;
    navigator.clipboard.writeText(shareUrl);
    alert("📎 Link copied! Share it with others.");
  };

  return (
    <div className="customize-container">
      <h1>🎨 Customize Your Product</h1>

      {/* خيارات التخصيص */}
      <div className="customization-options">
        <label>🎨 Choose Product Color:</label>
        <SketchPicker color={customization.color} onChange={handleColorChange} />

        <label>✍️ Add Custom Text:</label>
        <input
          type="text"
          value={customization.text}
          onChange={handleTextChange}
          placeholder="Enter text here"
        />

        <label>📷 Upload Custom Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        
        {/* اختيار المقاس */}
        <label>📏 Select Size:</label>
        <select onChange={handleSizeChange} value={customization.size}>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="custom">Custom Size</option>
        </select>
        
        {shouldSuggestSize && (
          <div>
            <label>🧍 Enter Your Custom Size:</label>
            <input
              type="text"
              placeholder="Enter custom size here"
              value={customSize}
              onChange={(e) => setCustomSize(e.target.value)}
            />
          </div>
        )}

        {/* اختيار نوع القماش */}
        <label>🧵 Select Fabric Type:</label>
        <select onChange={handleFabricChange} value={customization.fabric}>
          <option value="cotton">Cotton</option>
          <option value="polyester">Polyester</option>
          <option value="silk">Silk</option>
        </select>
      </div>

      {/* عرض المعاينة */}
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

      {/* الأزرار الرئيسية */}
      <div className="button-container">
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
