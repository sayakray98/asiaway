import React, { useContext, useState } from "react";
import logo from "../assets/images/logowhit.png";
import "./Header/Header.css";
import { Link } from "react-router-dom";
import MenuContext from "../context/MenuContext";

export default function Header() {
  const { onToggleMenu } = useContext(MenuContext);


  return (
    <>
      <div className="header-main"></div>
      <header className="header-below">
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-8">
                <Link
                  className="navbar-brand pl-5 ml-5"
                  to="/"
                  style={{ textAlign: "left" }}
                >
                  <img
                    src={logo}
                    alt=""
                    style={{ width: "48%" }}
                    className="logoimg"
                  />
                </Link>
              </div>

              <div className="col-lg-8 col-md-6 col-4 d-flex align-items-center justify-content-center">
                <div className="navdetails">
                  <button
                    className="navbar-toggler"
                    onClick={onToggleMenu}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <div className="navbaricondiv">
                      <span className="navbar-icons"></span>
                      <span className="navbar-icons"></span>
                      <span className="navbar-icons"></span>
                    </div>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    style={{ textTransform: "uppercase" }}
                  >
                    <ul className="navbar-nav ml-auto pr-5 mr-5">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/home">
                          Home <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/blog">
                          Blogs
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/services">
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/fleets">
                          Our Fleets
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
