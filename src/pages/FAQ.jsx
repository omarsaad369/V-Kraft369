import React, { useState } from 'react';
import "../styles/faq.css"; // تأكد من إضافة ملف الـ CSS الخاص بالصفحة

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle الفتح والغلق للأسئلة
  };

  const faqData = [
    { question: "What is VKraft?", answer: "VKraft is your destination for custom clothing that reflects your unique style." },
    { question: "How do I customize a product?", answer: "You can visit the Customize page, upload your design, select your product, and place your order." },
    { question: "What products do you offer?", answer: "We offer T-shirts, hoodies, accessories, sportswear, and more." },
    { question: "What payment methods do you accept?", answer: "We accept Credit/Debit cards, PayPal, and other secure payment methods." },
    { question: "How long does it take to process my order?", answer: "Processing time is usually 2-5 business days depending on your customization options." },
    { question: "Can I return a customized product?", answer: "Customized products are non-refundable unless there is a mistake on our part." },
    { question: "How can I track my order?", answer: "You will receive a tracking number via email once your order is shipped." },
    { question: "Can I cancel my order?", answer: "You can cancel your order within 24 hours of placing it. Please contact customer support immediately." },
    { question: "How can I contact customer support?", answer: "You can reach us via email at support@vkraft.com or through our contact form." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer worldwide shipping. Shipping costs and delivery times vary by location." },
    { question: "What if I need help designing my product?", answer: "You can contact our design team for assistance or check out our design resources." },
    { question: "Do you offer discounts?", answer: "We offer seasonal discounts and promotional codes. Stay tuned to our newsletter!" },
    { question: "Is the website secure for online payments?", answer: "Yes, we use SSL encryption and trusted payment gateways to ensure your payment is secure." },
    { question: "How do I create an account?", answer: "Click on the 'Sign Up' button at the top of the page and fill out the registration form." },
    { question: "How do I log into my account?", answer: "Click on the 'Sign In' button and enter your credentials to access your account." },
    { question: "What do I do if I forget my password?", answer: "Click on the 'Forgot Password' link on the Sign In page and follow the instructions." },
    { question: "Can I change my shipping address?", answer: "You can change your shipping address before the order is processed. Contact support for assistance." },
    { question: "Are your products eco-friendly?", answer: "Yes, we offer eco-friendly materials and strive to reduce waste in our production processes." },
    { question: "Can I order in bulk?", answer: "Yes, we offer bulk ordering for businesses and events. Please contact our sales team for more information." },
    { question: "How do I know if my order was successful?", answer: "You will receive an order confirmation email shortly after placing your order." },
    { question: "What if I receive a damaged item?", answer: "Please contact customer support with a photo of the damaged item, and we will resolve the issue." },
    { question: "Can I gift a product?", answer: "Yes, we offer gift wrapping options for your orders." },
    { question: "Do you offer gift cards?", answer: "Yes, we offer gift cards in various amounts that can be used on our website." },
    { question: "What happens if I make a mistake in my order?", answer: "You can contact customer support immediately, and we will try to assist you with correcting the order." },
    { question: "Are your sizes standard?", answer: "We use standard US sizing. You can refer to our size guide on each product page for more details." },
    { question: "Do you offer any loyalty programs?", answer: "Yes, we offer loyalty points for each purchase which can be redeemed for discounts on future orders." },
    { question: "Do you accept PayPal?", answer: "Yes, we accept PayPal as a payment method for your convenience." },
    { question: "Can I use a promo code?", answer: "Yes, enter your promo code during checkout to apply the discount." },
    { question: "Can I change my order after it's been placed?", answer: "Once an order is placed, it cannot be changed. Please contact support as soon as possible for assistance." },
    { question: "How can I subscribe to the newsletter?", answer: "You can subscribe to our newsletter at the bottom of the website for updates on new products and discounts." }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-section">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? "active" : ""}`} 
              onClick={() => handleToggle(index)}
            >
              <h2>{item.question}</h2>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
