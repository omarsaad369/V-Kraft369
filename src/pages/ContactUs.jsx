import React, { useState } from 'react';
import "../styles/contactUs.css"; // تأكد من إضافة التنسيق الخاص بالصفحة
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // استيراد الأيقونات المناسبة

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    // يمكنك هنا إضافة الكود الخاص بإرسال النموذج إلى الخادم أو قاعدة البيانات
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
      <section className="contact-us-header">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
      </section>

      <section className="contact-info">
        <div className="contact-info-item">
          <FaPhoneAlt size={24} />
          <p><strong>Phone:</strong> +20 01007342123</p>
        </div>
        <div className="contact-info-item">
          <FaEnvelope size={24} />
          <p><strong>Email:</strong> support@vkraft.com</p>
        </div>
        <div className="contact-info-item">
          <FaMapMarkerAlt size={24} />
          <p><strong>Address:</strong> Tanta, Egypt</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        {formSubmitted ? (
          <p className="thank-you-message">Thank you for contacting us! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Send Message</button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ContactUs;
