import React from 'react';
import "../styles/aboutUs.css"; // تأكد من إضافة ملف الـ CSS الخاص بالصفحة
import aboutImage from "../assets/icons/logo VKraft.png"; // يمكنك استخدام صورة مناسبة للمتجر

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>Welcome to VKraft – your ultimate destination for personalized clothing that reflects your unique personality.</p>
      </section>

      <section className="about-us-content">
        <div className="about-us-text">
          <h2>Our Story</h2>
          <p>VKraft was founded in 2020 with a mission to bring creativity and individuality to fashion. We offer custom-designed, high-quality clothing that allows you to express your unique personality through your style. From T-shirts and hoodies to accessories, we believe fashion should be personal and tailored to your preferences.</p>
        </div>
        <div className="about-us-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </section>

      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>At VKraft, our mission is to provide high-quality, customizable clothing that makes our customers feel confident and stylish. We aim to create products that inspire individuality while maintaining the highest standards of comfort and quality.</p>
      </section>

      <section className="about-us-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Quality</h3>
            <p>We ensure that every product we create is of the highest quality, combining comfort, durability, and style.</p>
          </div>
          <div className="value-item">
            <h3>Creativity</h3>
            <p>We embrace creativity and encourage our customers to express their individuality through their designs.</p>
          </div>
          <div className="value-item">
            <h3>Customer Satisfaction</h3>
            <p>Our customers' happiness is our top priority. We work hard to provide excellent service and support.</p>
          </div>
          <div className="value-item">
            <h3>Sustainability</h3>
            <p>We are committed to sustainable practices, offering eco-friendly materials and minimizing waste in our processes.</p>
          </div>
        </div>
      </section>

      <section className="about-us-footer">
        <p>&copy; 2025 VKraft. All rights reserved.</p>
      </section>
    </div>
  );
};

export default AboutUs;
