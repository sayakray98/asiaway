import React from "react";
import "../components/Footer/Footer.css";
import logo from "../assets/images/logowhit.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="footer py-5 overlayfooter">
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-7">
              <div className="detailsoffooter">
                <p>TRAVEL WITH US</p>
                <h5>ASIAWAY HOLIDAYS</h5>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="enquiedetails">
                <Link to="/contact">Enquire Now</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="belowfooter pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-left">
              <div className="footerlogo">
                <img src={logo} alt="" width={"52%"} />
              </div>
            </div>
            <div className="col-lg-6 text-right">
              <div className="socialicons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="col-lg-12 belowfootersubs text-justify">
              <div className="paradetails pr-5 mt-2">
                <p style={{ fontWeight: "400" }}>
                  ASIAWAY HOLIDAYS is a leading tour operator and destination
                  management company providing end-to-end travel management
                  services in Singapore and Malaysia.
                </p>
              </div>
            </div>
            <div
              className="col-lg-12 belowfootersubs  text-left py-2"
              style={{
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <div className="row">
                <div className="col-lg-6 col-12 pt-2 belowfootersubs">
                  <div className="subscategory d-flex align-items-center">
                    <i class="fa-solid fa-location-crosshairs"></i> &nbsp;
                    &nbsp;
                    <p className="addressparagraph">
                      India Office : OFFICE NO. 1103, ASTRALIS, SUPERTECH
                      SUPERNOVA, SECTOR- 94, NOIDA, UTTAR PRADESH- 201301
                    </p>
                  </div>
                  <br />
                  <div className="subscategory d-flex align-items-center">
                    <i class="fa-solid fa-location-crosshairs"></i> &nbsp;
                    &nbsp;
                    <p className="addressparagraph">
                      Singapore Correspondent Office : 260A Sengkang East
                      Way,#06-486, Postal , Singapore 541260
                    </p>
                  </div>
                  <br />
                  <div className="subscategory d-flex align-items-center">
                    <i class="fa-solid fa-location-crosshairs"></i> &nbsp;
                    &nbsp;
                    <p className="addressparagraph">
                      Malaysia Correspondent Office : Wisma Koponas, 74-2ND
                      Floor Jalan Tun Sambanthan 50470, Kuala Lumpur
                    </p>{" "}
                  </div>

                  <br />
                </div>
                <div className="col-lg-6 col-12 pt-2 belowfootersubs text-left">
                  <div className="emailf d-flex align-items-center">
                    <i class="fa-regular fa-envelope"></i>{" "}
                    <p>
                      <a href="mailto:admin@asiawayholidays.com">
                        &nbsp; admin@asiawayholidays.com{" "}
                      </a>
                    </p>
                  </div>

                  <div className="emaill d-flex align-items-center">
                    <i class="fa-regular fa-envelope"></i>{" "}
                    <p>
                      <a href="mailto:b2bsales@asiawayholidays.com">
                        &nbsp; b2bsales@asiawayholidays.com
                      </a>
                    </p>
                  </div>
                  <div className="emaill d-flex align-items-center mt-5">
                    <i class="fa-solid fa-mobile"></i>{" "}
                    <p>
                      <a href="tel:+91 8879818079">&nbsp; +91 8879818079</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 belowfootersubs text-left mt-3">
              <h6>Copyrights © All Rights Reserved by ASIAWAY HOLIDAYS</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
