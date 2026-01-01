import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import "../HeaderMoobilePage/Menumobile.css";
import MenuContext from "../../../context/MenuContext";
export default function Mobilemenu() {
  const { showMenu, onToggleMenu } = useContext(MenuContext);

  return (
    <>
      <section
        className="menumobile"
        style={{ display: showMenu ? "block" : "none" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-left">
              <i className="fa-solid fa-xmark" onClick={onToggleMenu}></i>

              <ul className="navbar-navnew ml-auto pr-5 mr-5">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home" onClick={onToggleMenu}>
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog" onClick={onToggleMenu}>
                    Blogs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/services" onClick={onToggleMenu}>
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/fleets" onClick={onToggleMenu}>
                    Our Fleets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={onToggleMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
