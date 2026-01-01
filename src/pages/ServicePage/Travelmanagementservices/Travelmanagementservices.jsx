import React from "react";

import image_01 from "../../../assets/images/Flower Dome at Garden By the Bay.png";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import "./Travelmanagementservices.css";
import { Link } from "react-router-dom";
import service_01 from "../../../assets/images/On_Deck Water Slide,Swimming Pool, Genting Dream Cruise.png";
import service_02 from "../../../assets/images/Skywalk at Fort Siloso,Sentosa.png";
import service_03 from "../../../assets/images/Super Tree Grove at Garden by the Bay.png";

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
                  Our travel management services offer comprehensive support for
                  both business and personal travel, handling everything from
                  planning to execution. We cover itinerary creation, flight and
                  hotel reservations, visa support, cost control, and
                  round-the-clock assistance for travellers. By streamlining
                  every aspect of travel and ensuring a seamless experience, we
                  help save time, reduce expenses, and enhance traveller
                  comfort, convenience.
                </p>
                <button className="btn mt-3">
                  <Link to="/contact">
                    Contact us &nbsp;{" "}
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </Link>{" "}
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
                      <ol>
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
                      <ol>
                        <li>Hotel bookings (budget to luxury)</li>
                        <li>Group hotel management & allotments</li>
                        <li>Special requests handling (beds, meals, views)</li>
                      </ol>
                    </div>
                  </div>
                  <div className="col-lg-3 col-12">
                    <div className="colimgtextlist">
                      <h5>Ground Transportation</h5>
                      <ol>
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
                      <ol>
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

      <section className="belowservices">
        <div className="container p-5 mainsection">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="row">
                <div className="col-lg-12 col-12 mt-5">
                  <div className="belowservicessub">
                    <div className="firstcol">
                      <img src={service_01} alt="" />
                    </div>

                    <div className="secondcol">
                      <h5>MICE & Corporate Travel</h5>
                      <ol>
                        <li>Meetings, Incentives, Conferences & Events</li>
                        <li>Venue sourcing & coordination</li>
                        <li>Corporate group handling</li>
                      </ol>

                      <div className="databtnsub">
                        <button className="btn mt-3">
                          <Link to="/contact">
                            Know More &nbsp;{" "}
                            <i class="fa-solid fa-arrow-right-long"></i>
                          </Link>{" "}
                        </button>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-12 mt-5">
                  <div className="belowservicessub">
                    <div className="firstcol">
                      <img src={service_02} alt="" style={{ width: "100%" }} />
                    </div>

                    <div className="secondcol">
                      <h5>Visa & Documentation Support</h5>
                      <ol>
                        <li>Visa guidance & documentation assistance</li>
                        <li>Entry requirements & compliance advisory</li>
                      </ol>

                      <div className="databtnsub">
                        <button className="btn mt-3">
                          <Link to="/contact">
                            Know More &nbsp;{" "}
                            <i class="fa-solid fa-arrow-right-long"></i>
                          </Link>{" "}
                        </button>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="col-lg-12 col-12 mt-5">
                  <div className="belowservicessub">
                    <div className="firstcol">
                      <img src={service_03} alt="" style={{ width: "100%" }} />
                    </div>

                    <div className="secondcol">
                      <h5>B2B Partner Services</h5>
                      <ol>
                        <li>Agent support & rate contracting</li>
                        <li>White-label itineraries</li>
                        <li>Voucher & documentation support</li>
                      </ol>
                      <div className="databtnsub">
                        <button className="btn mt-3">
                          <Link to="/contact">
                            Know More &nbsp;{" "}
                            <i class="fa-solid fa-arrow-right-long"></i>
                          </Link>{" "}
                        </button>
                      </div>
                    </div>
                    <div className="clearfix"></div>
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
