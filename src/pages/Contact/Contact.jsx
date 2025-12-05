import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../Contact/Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="contact text-left">
        <div className="container">
        <h6 className="d-flex pb-2">  <Link to="/home" style={{"color" : "#1E703E", "text-decoration" : "underline"}}> Home </Link>&nbsp; / Contact</h6>
          <div className="row">
            <div className="col-lg-8 m-0 p-0">
              <div className="contactForm">
               <form action="https://docs.google.com/forms/u/0/d/1oZaD_62mspRIW_5oPSOMffLokVx9fsygfCt_awNyz98/previewResponse" method="POST" target="_blank">
                  {/* First Name and Last Name Row */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="fname" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="YPqjbf"
                        className="form-control"
                       
                      
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lname" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="form-control"
                       
                      />
                    </div>
                  </div>

                  {/* Email and Phone Row */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                       
                        required
                      />
                      <small className="text-danger">This is required.</small>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                       
                      />
                    </div>
                  </div>

                  {/* How did you hear about us */}
                  <div className="mb-3">
                    <label htmlFor="source" className="form-label">
                      How did you hear about us?
                    </label>
                    <select id="source" name="source" className="form-select">
                      <option value="talk-radio">Talk Radio</option>
                      <option value="social-media">Social Media</option>
                      <option value="friend">Friend</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="form-control"
                      placeholder="Say hello"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-submit w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 m-0 p-0 colimages">
                <div className="colimage">

                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
