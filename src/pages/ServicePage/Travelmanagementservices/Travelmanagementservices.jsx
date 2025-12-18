import React from "react";

import image_01 from "../../../assets/images/Night Safari.jpeg";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "./Travelmanagementservices.css";
import { Link } from "react-router-dom";

export default function Travelmanagementservices() {
  return (
    <>
      <Header />
      <section className="travelmanagementservices">
   
        <div className="container mt-5 ">
               <h6 className="d-flex pb-2">
          {" "}
          <Link
            to="/home"
            style={{ color: "#1E703E", "text-decoration": "underline" }}
          >
            {" "}
            Home{" "}
          </Link>
          &nbsp; / Travel Management Services
        </h6>
          <div className="row mainsection p-5 mt-4">
            <div className="col-lg-6">
              <div className="travelmanagementservicescontent text-left">
                <h5 style={{ fontSize: "28px" }}>
                  Explore Travel Management <br /> Services
                </h5>
                <p>
                  Travel Management Services provide end-to-end planning,
                  coordination, and support for business and personal travel
                  needs. These services include itinerary planning, flight and
                  hotel bookings, visa assistance, travel policy compliance,
                  cost optimization, and 24/7 traveler support. By streamlining
                  logistics and ensuring seamless travel experiences, travel
                  management services help save time, reduce costs, and enhance
                  traveler convenience and safety.
                </p>
                <button className="btn mt-3">
                  <a href="">
                    Contact us &nbsp;{" "}
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </a>{" "}
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="travelmanagementservicescontent">
                <img src={image_01} alt="" width={"100%"} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-12 ">
              <h5 className="whatwedoheading p-3 my-3 py-3">Services</h5>
              <div className="dotted">
                <div className="row text-left mt-4 pt-4">
                  <div className="col-lg-3 col-12">
                    <div className="colimgtextlist">
                      <h5>Pre-Arrival & Planning</h5>
                      <ol className="colimagelist">
                        <li>Customized tour planning & itinerary design</li>
                        <li>Group, FIT & MICE travel planning</li>
                        <li>Costing, budgeting & travel consoltation</li>
                        <li>Hotel selection & room allocation planning</li>
                      </ol>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="colimgtextlist">
                      <h5>Accommodation Services</h5>
                      <ol className="colimagelist">
                        <li>Hotel bookings (budget to luxury)</li>
                        <li>Group hotel management & allotments</li>
                        <li>Special requests handling (beds, meals, views)</li>
                      </ol>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="colimgtextlist">
                      <h5>Ground Transportation</h5>
                      <ol className="colimagelist">
                        <li>Airport arrival & departure transfers</li>
                        <li>Private cars, coaches & luxury vehicles</li>
                        <li>SIC (Seat-in-Coach) tours</li>
                        <li>Driver coordination & vehicle management</li>
                      </ol>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="colimgtextlist">
                      <h5>Sightseeing & Experiences</h5>
                      <ol className="colimagelist">
                        <li>Guided sightseeing tours</li>
                        <li>Attraction tickets & passes</li>
                        <li>Theme parks, shows & cruises</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
