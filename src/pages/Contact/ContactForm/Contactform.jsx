import React, { useState, useEffect } from "react";
import "./Contactform.css";
import emailjs from "emailjs-com";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    days: 4,
    nights: 3,
    message: "",
  });

  // Auto-calculate nights
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      nights: prev.days > 0 ? prev.days - 1 : 0,
    }));
  }, [formData.days]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w611k03",
        "template_5j92daa",
        e.target,
        "H8ycHLmBCtL0E7bwt",
      )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });

    e.target.reset();
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Custom Package:", formData);
    alert("Custom itinerary request submitted!");
  };

  return (
    <div className="contact-form-wrapper">
      <h3 className="contact-title">Create Your Custom Package</h3>
      <p className="contact-subtitle">
        Customize your trip duration and tell us what you want.
      </p>

      <form className="contact-form" onSubmit={sendEmail}>
        {/* NAME */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* EMAIL & PHONE */}
        <div className="form-row">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              required
            />
          </div>
        </div>

        {/* TRAVEL DATE */}
        <div className="form-group">
          <label>Preferred Travel Date</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
          />
        </div>

        {/* CUSTOM DAY & NIGHT */}
        <div className="custom-package-box">
          <h4>Trip Duration</h4>

          <div className="form-row">
            <div className="form-group">
              <label>Number of Days</label>
              <input
                type="number"
                min="1"
                name="days"
                value={formData.days}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Number of Nights</label>
              <input
                type="number"
                name="nights"
                value={formData.nights}
                readOnly
              />
            </div>
          </div>
        </div>

        {/* MESSAGE */}
        <div className="form-group">
          <label>Your Requirements</label>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Destinations, budget, hotel type, number of travelers..."
            required
          />
        </div>

        <button type="submit" className="contact-submit-btn">
          Submit Custom Package
        </button>
      </form>
    </div>
  );
}
