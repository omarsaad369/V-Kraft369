// استيراد مكتبات React و الأيقونات اللازمة
import React from "react";  
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";  // استيراد الأيقونات الاجتماعية
import { MdHome, MdEmail, MdPhone, MdPrint } from "react-icons/md";  // استيراد الأيقونات الخاصة بالعنوان، البريد، الهاتف والطباعة
import "../styles/footer.css"; // استيراد ملف التنسيق الخاص بالتذييل

// إنشاء مكون Footer
const Footer = () => {
  return (
    <footer className="footer"> {/* الحاوية الرئيسية للتذييل */}
      
      {/* قسم الشبكات الاجتماعية */}
      <section className="social-media">
        <div className="me-5">
          <span>Get connected with us on social networks:</span> {/* نص يوضح بأن هذا هو قسم الشبكات الاجتماعية */}
        </div>
        <div className="social-icons">
          {/* روابط الشبكات الاجتماعية مع أيقونات */}
          <a href="https://facebook.com" className="text-white me-4"><FaFacebookF /></a>
          <a href="https://twitter.com" className="text-white me-4"><FaTwitter /></a>
          <a href="https://google.com" className="text-white me-4"><FaGoogle /></a>
          <a href="https://instagram.com" className="text-white me-4"><FaInstagram /></a>
          <a href="https://linkedin.com" className="text-white me-4"><FaLinkedin /></a>
          <a href="https://github.com" className="text-white me-4"><FaGithub /></a>
        </div>
      </section>

      {/* قسم الروابط داخل الـ Footer */}
      <section className="links-section">
        {/* قسم المعلومات الخاصة بالشركة */}
        <div className="col">
          <h2>Company name</h2> {/* عنوان القسم */}
          <hr />
          <p>VKraft is the perfect destination for personalized clothing that adds a touch of creativity and distinction. We offer a variety of high-quality products at competitive prices, allowing you to express your personality through unique and comfortable designs. Whether you're looking for T-shirts, hoodies, or accessories, we offer options that meet all your needs with a modern style that suits all tastes. With VKraft, you can always find what makes you stand out, and we strive to provide the best in every product we offer to our customers. </p> {/* وصف الشركة */}
        </div>

        {/* قسم المنتجات */}
        <div className="col">
          <h2>Products</h2> {/* عنوان القسم */}
          <hr />
          {/* روابط للمنتجات */}
          <p><a href="#!">T-Shirts</a></p>
          <p><a href="#!">Hoodies</a></p>
          <p><a href="#!">Accessories</a></p>
          <p><a href="#!">Sportswear</a></p>
          <p><a href="#!">Jackets</a></p>
          <p><a href="#!">Shoes</a></p>
          <p><a href="#!">Kidswear</a></p>
          <p><a href="#!">Bags</a></p>
        </div>

        {/* قسم الروابط المفيدة */}
        <div className="col">
          <h2>Useful Links</h2> {/* عنوان القسم */}
          <hr />
          {/* روابط إضافية */}
          <p><a href="#!">Your Account</a></p>
          <p><a href="#!">Become an Affiliate</a></p>
          <p><a href="#!">Shipping Rates</a></p>
          <p><a href="#!">Help</a></p>
        </div>

        {/* قسم معلومات الاتصال */}
        <div className="col">
          <h2>Contact</h2> {/* عنوان القسم */}
          <hr />
          {/* معلومات الاتصال مع الأيقونات المناسبة */}
          <p><MdHome className="mr-3" /> Tanta, Egypt</p>
          <p><MdEmail className="mr-3" /> TeamLeader@vkraft.com</p>
          <p><MdPhone className="mr-3" /> +20 01007342123</p>
          <p><MdPrint className="mr-3" /> +20 01001742658</p>
        </div>
      </section>

      {/* حقوق الملكية */}
      <div className="footer-rights">
        <p>© 2025 Copyright: <a href="https://vkraft.com" className="text-dark">VKraft.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;  // تصدير مكون الـ Footer لاستخدامه في أماكن أخرى في التطبيق
