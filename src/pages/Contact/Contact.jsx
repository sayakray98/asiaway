import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../Contact/Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    source: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  formDataToSend.append("fname", formData.fname);
  formDataToSend.append("lname", formData.lname);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("phone", formData.phone);
  formDataToSend.append("source", formData.source);
  formDataToSend.append("message", formData.message);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycby76XU6-OwFvvfnY_2FfehX7KBTTWSTEERu1-twzlEuhxSGemQNISs4kSGBkxdrb28/exec",
      {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors"
      }
    );

    alert("Message submitted successfully!");
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      source: "",
      message: ""
    });
  } catch (error) {
    alert("Submission failed");
  }
};

  return (
    <>
      <Header />

      <section className="contact text-left">
        <div className="container">
          <h6 className="d-flex pb-2">
            <Link to="/home" style={{ color: "#1E703E", textDecoration: "underline" }}>
              Home
            </Link>
            &nbsp;/ Contact
          </h6>

          <div className="row">
            <div className="col-lg-8 m-0 p-0">
              <div className="contactForm">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">How did you hear about us?</label>
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Select</option>
                      <option value="Talk Radio">Google search/ Online Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Friend">Friend</option>
                      <option value="Friend">Travel show/exhibitions </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn btn-submit w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-4 m-0 p-0 colimages">
              <div className="colimage"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
