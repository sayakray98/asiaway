import React, { useState, useEffect } from "react";
import "./Contactform.css";
import emailjs from "emailjs-com";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Contactform() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    days: 4,
    nights: 3,
    message: "",
    travelDate: null,
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
        {/* FULL NAME */}
        <div className="form-group">
          <TextField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            fullWidth
            required
          />
        </div>

        {/* EMAIL & PHONE */}
        <div className="form-row">
          <div className="form-group">
            <TextField
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              fullWidth
              required
            />
          </div>

          <div className="form-group">
            <TextField
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              fullWidth
              required
            />
          </div>
        </div>

        {/* TRAVEL DATE */}
        <div className="form-group">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Preferred Travel Date"
              value={formData.travelDate}
              onChange={(newValue) =>
                setFormData({ ...formData, travelDate: newValue })
              }
              slotProps={{
                textField: {
                  fullWidth: true,
                  name: "travelDate",
                },
              }}
            />
          </LocalizationProvider>
        </div>

        {/* DAYS & NIGHTS */}
        <div className="custom-package-box">
          <div className="form-row">
            <div className="form-group">
              <TextField
                label="Number of Days"
                type="number"
                name="days"
                value={formData.days}
                onChange={handleChange}
                inputProps={{ min: 1 }}
                fullWidth
              />
            </div>

            <div className="form-group">
              <TextField
                label="Number of Nights"
                type="number"
                value={formData.nights}
                fullWidth
                InputProps={{ readOnly: true }}
              />
              {/* Hidden input for EmailJS */}
              <input type="hidden" name="nights" value={formData.nights} />
            </div>
          </div>
        </div>

        {/* MESSAGE */}
       
          <TextField
            label="Your Requirements"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Destinations, budget, hotel type, number of travelers..."
       multiline="true"
            rows={6}
            fullWidth
            
            required
          />
     

        <button type="submit" className="contact-submit-btn">
          Submit Custom Package
        </button>
      </form>
    </div>
  );
}
