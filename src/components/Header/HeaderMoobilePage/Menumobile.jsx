import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header";
import "../HeaderMoobilePage/Menumobile.css";
import MenuContext from "../../../context/MenuContext";
export default function Mobilemenu() {
  const { showMenu, onToggleMenu  } = useContext(MenuContext);

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
                  <Link className="nav-link" to="/home">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Attraction
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/">
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
      </section>
    </>
  );
}
