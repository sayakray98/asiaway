import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Contact.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


import {
  TextField,
  Grid,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
} from "@mui/material";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w611k03",
        "template_v4k952k",
        e.target,
        "H8ycHLmBCtL0E7bwt",
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
    <>
      <Header />

      <section className="contact-page">
        {/* Background Circle */}
        <div className="bg-circle"></div>

        {/* Card Wrapper */}
        <div className="contact-card container-fluid">
          {/* Breadcrumb */}
          <h6 className="d-flex pb-2 my-5">
            <Link
              to="/home"
              style={{ color: "#ffffff", textDecoration: "underline" }}
            >
              Home
            </Link>
            &nbsp; &nbsp; <span style={{ color: "#ffffff" }}> / Contact</span>
          </h6>

          <div
            className="row g-0"
            style={{ backgroundColor: "white", borderRadius: "12px" }}
          >
            {/* LEFT INFO PANEL */}
            <div className="col-lg-5 contact-left">
              <h2>Let’s get in touch</h2>

              <p className="contact-desc">
                ASIAWAY HOLIDAYS is a leading tour operator and destination
                management company providing end-to-end travel management
                services in Singapore and Malaysia.
              </p>

              <div className="contact-info">
                {/* Address */}
                <div className="info-item">
                  <LocationOnOutlinedIcon className="info-icon" />
                  <span>
                    Office No. 1103, Astralis, Supertech Supernova, Sector-94,
                    Noida, India, 201303
                  </span>
                </div>

                {/* Emails */}
                <div className="info-item">
                  <EmailOutlinedIcon className="info-icon" />
                  <div className="info-links">
                    <a href="mailto:admin@asiawayholidays.com">
                      admin@asiawayholidays.com
                    </a>
                    <a href="mailto:b2bsales@asiawayholidays.com">
                      b2bsales@asiawayholidays.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="info-item">
                  <PhoneOutlinedIcon className="info-icon" />
                  <a href="tel:+918879818079">+91 8879818079</a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="social-icons">
                 <a href="https://www.facebook.com/people/AsiaWay-Holidays/61586820883804/">
                  {" "}
                  <FacebookIcon />
                </a>
                <a href="#" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://wa.me/+918879818079">
                  <WhatsAppIcon />
                </a>
                
              </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="col-lg-7 contact-right">
              <h3>Contact Us</h3>
              <form onSubmit={sendEmail}>
                <Grid container spacing={2}>
                  {/* First Name */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="First Name"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>

                  {/* Last Name */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Last Name"
                      name="lname"
                      value={formData.lname}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>

                  {/* Source */}

                  <FormControl fullWidth>
                    <InputLabel>How did you hear about us?</InputLabel>
                    <Select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      label="How did you hear about us?"
                    >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="Google">Google / Online Search</MenuItem>
                      <MenuItem value="Social Media">Social Media</MenuItem>
                      <MenuItem value="Friend">Friend</MenuItem>
                      <MenuItem value="Exhibition">
                        Travel show / exhibitions
                      </MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>

                  {/* Message */}

                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={5}
                  />

                  {/* Submit */}

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      backgroundColor: "#ffffff",
                      "&:hover": {
                        backgroundColor: "#155c33",
                        color: "#ffffff",
                      },
                      color: "#17a25f",
                      py: 1.5,
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
