import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Fleets.css";

import { Link } from "react-router-dom";

import fleet_01 from "../../assets/images/44 seater AC Coach.png";
import fleet_02 from "../../assets/images/Audi.png";
import fleet_03 from "../../assets/images/BMW.png";
import fleet_04 from "../../assets/images/Toyota Coaster- 20 seater.png";
import fleet_05 from "../../assets/images/Toyota Hiace.png";

export default function Fleets() {
  return (
    <>
      <Header />

      <section className="fleets text-left">
        <div className="container mt-5">
          <h6 className="d-flex pb-2">
            {" "}
            <Link
              to="/home"
              style={{ color: "#1E703E", "text-decoration": "underline" }}
            >
              {" "}
              Home{" "}
            </Link>
            &nbsp; / Our Fleets
          </h6>
          <div className="row mainsectionfleets p-5 mt-4">
            <div className="col-lg-12 col-12" >
              <div className="firstcolfleets">
                <img src={fleet_01} alt="" />
              </div>
              <div className="secondcolfleets">
                <h5 className="carsdetails">44 seater AC Coach</h5>

                <p>
                  Private Tours – Dedicated sedan vehicles for FITs, families, customized itineraries, and airport pick-ups and drop-offs.
                </p>

                <button className="btn">
                  <a href="">Book Now</a>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-12 col-12" style={{borderTop: "4px dotted #1d7625ff", paddingTop: "60px"}}>
              <div className="firstcolfleets">
                <h5 className="carsdetails">Audi</h5>

                <p>
                 SIC (Seat-in-Coach) Tours – Shared transfers and sightseeing tours operated on fixed schedules, primarily using 20-seater Toyota Coaster or 13-seater Toyota Hiace
                </p>

                <button className="btn">
                  <a href="">Book Now</a>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="secondcolfleets">
                <img src={fleet_02} alt="" />
              </div>
            </div>
            <div className="col-lg-12 col-12" style={{borderTop: "4px dotted #1d7625ff", paddingTop: "60px"}}>
              <div className="firstcolfleets">
                <img src={fleet_03} alt="" />
              </div>
              <div className="secondcolfleets">
                <h5 className="carsdetails">BMW</h5>

                <p>
                Luxury Tours – Premium transportation featuring high-end vehicles such as Mercedes-Benz and BMW, offering elevated comfort and style.
                </p>

                <button className="btn">
                  <a href="">Book Now</a>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-12 col-12" style={{borderTop: "4px dotted #1d7625ff", paddingTop: "60px"}}>
              <div className="firstcolfleets">
                <h5 className="carsdetails">Toyota Coaster- 20 seater</h5>

                <p>

               Group Tours – Coaches and larger vehicles for leisure groups and MICE tours, commonly including 23-seater Toyota Coaster or 44-seater coaches.  </p>

                <button className="btn">
                  <a href="">Book Now</a>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="secondcolfleets">
                <img src={fleet_04} alt="" />
              </div>
            </div>
            <div className="col-lg-12 col-12" style={{borderTop: "4px dotted #1d7625ff", paddingTop: "60px"}}>
              <div className="firstcolfleets">
                <img src={fleet_05} alt="" />
              </div>
              <div className="secondcolfleets">
                <h5 className="carsdetails">Toyota Hiace</h5>

                <p>
                   Private Tours – Dedicated sedan vehicles for FITs, families, customized itineraries, and airport pick-ups and drop-offs.
                </p>

                <button className="btn">
                  <a href="">Book Now</a>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
