import React from "react";
import "../components/Footer/Footer.css";
import logo from "../assets/images/logowhite.png";
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
                <h5>YOUR VACATION PTE LTD</h5>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="enquiedetails">
                <Link to="/contact">Enquire Now</Link>
              </div>
            </div>
            <div className="col-lg-3 col-6 attractiondetails">
              <div className="attractiondetailssub">
                <h6 className="py-5 text-left pl-4 py-0">Attractions</h6>
                <ul className="dotuldata">
                  <li>
                    <a href="">Singapore Zoo</a>
                  </li>
                  <li>
                    <a href="">Sentosa Island</a>
                  </li>
                  <li>
                    <a href="">Night Safari</a>
                  </li>
                  <li>
                    <a href="">Marina Bay Sands Skypark</a>
                  </li>
                  <li>
                    <a href="">Marina Bay Sands Skypark</a>
                  </li>
                  <li>
                    <a href="">Jurong Bird Park</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="belowfooter pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-left">
              <div className="footerlogo">
                <img src={logo} alt="" width={"56%"} />
              </div>
            </div>
            <div className="col-lg-3 text-right">
              <div className="socialicons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="col-lg-9 belowfootersubs text-justify">
              <div className="paradetails pr-5 mt-4">
                <p style={{ fontWeight: "400" }}>
                  Your Vacation Pte Ltd is one of the most leading tour operator
                  and destination management company that delivers all the
                  travel management services in Singapore. We are also providing
                  business to business management DMC services in Singapore
                  under the Singapore Tourism board Licenses No (02848).
                </p>
              </div>
            </div>
            <div className="col-lg-8 belowfootersubs text-left py-2" style={{"borderTop" : "1px solid black", "borderBottom" : "1px solid black"}}>
              <div className="row">
                <div className="col-lg-4 belowfootersubs d-flex align-items-center">
                  <i class="fa-solid fa-location-crosshairs"></i> &nbsp; &nbsp;
                  <p>
                    101 Kitchener Road, Jalan Besar Plaza #03-44, Singapore
                    -208511
                  </p>
                </div>
                <div className="col-lg-4belowfootersubs ">
                  <div className="whatsappf d-flex">
                    <i class="fa-brands fa-whatsapp pt-1"></i>{" "}
                    <p>+65 92725871</p>
                  </div>

                  <div className="whatsappl d-flex">
                    <i class="fa-brands fa-whatsapp pt-1"></i>{" "}
                    <p>+65 65898640</p>
                  </div>
                </div>
                <div className="col-lg-4 belowfootersubs text-left">
                  <div className="emailf d-flex">
                    <i class="fa-brands fa-whatsapp pt-1"></i>{" "}
                    <p>+65 92725871</p>
                  </div>

                  <div className="emaill d-flex">
                    <i class="fa-brands fa-whatsapp pt-1"></i>{" "}
                    <p>+65 65898640</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 belowfootersubs text-left mt-3">
                <h6>Copyrights © All Rights Reserved by YOUR VACATION PTE LTD</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
