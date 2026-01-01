import React, { useState, useEffect, useMemo } from "react";
import Footer from "../components/Footer";
import caro1 from "../assets/images/Little India at Diwali.jpg";
import caro2 from "../assets/images/Marina Bay At night.jpg";
import caro3 from "../assets/images/Murugan Statu at Batu Cave.png";
import caro4 from "../assets/images/River Wonder.png";
import caro5 from "../assets/images/Twin Tower, KL.jpg";
import bg from "../assets/images/bg.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import singapore from "../assets/images/Singapore Flyer.jpg";
import singaporenext from "../assets/images/Genting Highland Cable car.png";
import singaporenext2 from "../assets/images/Eagle Square, Langkawi.png";
import singaporenext3 from "../assets/images/International Cruise.jpg";
import bird_paradise from "../assets/images/Bird Paradise.jpg";
import cable_ride_sentosa from "../assets/images/Cable Ride at Sentosa Island.png";
import egyptian_gallery_universal from "../assets/images/Egyptian Gallery , Universal Studio.jpg";
import garden_by_the_bay from "../assets/images/Garden By the Bay.png";
import night_safari_tram from "../assets/images/night safari tram ride.jpg";
import skyline_ride_sentosa from "../assets/images/Skyline Ride @Sentosa.png";
import skyluge_sentosa from "../assets/images/Skyluge @Sentosa.jpeg";
import aquaria_kl from "../assets/images/Aquaria, Kuala Lumpur.png";
import batu_cave_kilim from "../assets/images/Bat Cave, Kilim Geo Forest Park, Langkawi.png";
import cable_car_langkawi from "../assets/images/Cable Car, Langkawi.png";
import crocodile_park from "../assets/images/Crocodile Park, Langkawi.png";
import entopia_penang from "../assets/images/Entopia Butterfly Firm,Penang.png";
import funicular_penang from "../assets/images/Funicular Train Ride, Penang.png";
import georgetown from "../assets/images/GerogeTown Heritage Site,Penang.png";
import kek_lok_si from "../assets/images/Kek Lok Si Temple, Penang.png";
import kilim_geo from "../assets/images/Kilim Geo Forest Park,Langkawi.png";
import kl_tower from "../assets/images/KL tower, Kuala Lumpur.jpg";
import legoland from "../assets/images/Legoland, Malaysia.png";
import murugan_temple from "../assets/images/Murugan Temple, Batu Cave.png";
import skybridge_1 from "../assets/images/Skybridge, Langkawi.png";
import twin_tower from "../assets/images/Twin Tower, Kualalampur.png";

import video from "../assets/images/WhatsApp Video 2025-12-29 at 11.23.20 PM.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import Header from "../components/Header";
import "./Homepage/Home.css";

export default function Home() {
  const [count, setCount] = useState(0);

  const [category, setCategory] = useState("singapore");

  useEffect(() => {
    if (count > 1200) return; // stop when reached 10

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 5); // 1 second

    return () => clearInterval(timer);
  }, [count]);

  // const testimonials = [
  //   {
  //     text: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast.",
  //     name: "Shams W. Pawel",
  //     img: user1,
  //     stars: 5,
  //   },
  //   {
  //     text: "Amazing experience! Everything was arranged perfectly. I highly recommend their services to everyone.",
  //     name: "Maria Thompson",
  //     img: user1,
  //     stars: 5,
  //   },
  //   {
  //     text: "Exceptional service, wonderful team, and unforgettable memories. Truly world-class!",
  //     name: "David Anderson",
  //     img: user1,
  //     stars: 5,
  //   },
  // ];

  const responsivecaro = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderData = [
    // 🔹 Singapore (already existing)
    {
      img: bird_paradise,
      title: "Bird Paradise",
      alt: "Singapore Bird Paradise",
    },
    {
      img: cable_ride_sentosa,
      title: "Cable Ride at Sentosa Island",
      alt: "Singapore Cable Ride at Sentosa Island",
    },
    {
      img: egyptian_gallery_universal,
      title: "Egyptian Gallery, Universal Studio",
      alt: "Singapore Egyptian Gallery Universal Studio",
    },
    {
      img: garden_by_the_bay,
      title: "Garden By the Bay",
      alt: "Singapore Garden By the Bay",
    },
    {
      img: night_safari_tram,
      title: "Night Safari Tram Ride",
      alt: "Singapore Night Safari Tram Ride",
    },
    {
      img: skyline_ride_sentosa,
      title: "Skyline Ride Sentosa",
      alt: "Singapore Skyline Ride Sentosa",
    },
    {
      img: skyluge_sentosa,
      title: "Sky Luge Sentosa",
      alt: "Singapore Sky Luge Sentosa",
    },

    // 🔹 Malaysia (from your images)
    {
      img: aquaria_kl,
      title: "Aquaria KLCC",
      alt: "Malaysia Aquaria Kuala Lumpur",
    },
    {
      img: batu_cave_kilim,
      title: "Batu Caves & Kilim Geo Forest Park",
      alt: "Malaysia Batu Caves Kilim Geo Forest Park Langkawi",
    },
    {
      img: cable_car_langkawi,
      title: "Langkawi Cable Car",
      alt: "Malaysia Langkawi Cable Car",
    },
    {
      img: crocodile_park,
      title: "Crocodile Park Langkawi",
      alt: "Malaysia Crocodile Park Langkawi",
    },
    {
      img: entopia_penang,
      title: "Entopia Butterfly Farm",
      alt: "Malaysia Entopia Butterfly Farm Penang",
    },
    {
      img: funicular_penang,
      title: "Penang Hill Funicular Train",
      alt: "Malaysia Penang Hill Funicular Train",
    },
    {
      img: georgetown,
      title: "George Town Heritage Site",
      alt: "Malaysia George Town Heritage Site Penang",
    },
    {
      img: kek_lok_si,
      title: "Kek Lok Si Temple",
      alt: "Malaysia Kek Lok Si Temple Penang",
    },
    {
      img: kilim_geo,
      title: "Kilim Geo Forest Park",
      alt: "Malaysia Kilim Geo Forest Park Langkawi",
    },
    { img: kl_tower, title: "KL Tower", alt: "Malaysia KL Tower Kuala Lumpur" },
    {
      img: legoland,
      title: "Legoland Malaysia",
      alt: "Malaysia Legoland Theme Park",
    },
    {
      img: murugan_temple,
      title: "Murugan Temple Batu Caves",
      alt: "Malaysia Murugan Temple Batu Caves",
    },
    {
      img: skybridge_1,
      title: "Langkawi Sky Bridge",
      alt: "Malaysia Langkawi Sky Bridge",
    },
    {
      img: twin_tower,
      title: "Petronas Twin Towers",
      alt: "Malaysia Petronas Twin Towers Kuala Lumpur",
    },
  ];
  const filteredSlides = useMemo(() => {
    return sliderData.filter((item) =>
      item.alt.toLowerCase().includes(category)
    );
  }, [category]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 60, // left+right preview
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 0,
      partialVisibilityGutter: 40,
    },
  };
  const responsivenew = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 60, // left+right preview
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
    },
  };

  return (
    <>
      <Header />

      <section className="homeCarosel">
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col-lg-12 p-0 m-0">
              <div className="home-demo">
                <Carousel
                  responsive={responsivecaro}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  arrows={false}
                  showDots={false}
                  pauseOnHover={false}
                  swipeable={true}
                  draggable={true}
                  keyBoardControl={true}
                >
                  <div className="zoom-container">
                    <img src={caro1} alt="img1" className="zoom-img" />
                    <h5 className="caroheader">Asiaway Holidays</h5>
                  </div>

                  <div className="zoom-container">
                    <img src={caro2} alt="img2" className="zoom-img" />
                    <h5 className="caroheader">Asiaway Holidays</h5>
                  </div>

                  <div className="zoom-container">
                    <img src={caro3} alt="img3" className="zoom-img" />
                    <h5 className="caroheader">Asiaway Holidays</h5>
                  </div>
                  <div className="zoom-container">
                    <img src={caro4} alt="img4" className="zoom-img" />
                    <h5 className="caroheader">Asiaway Holidays</h5>
                  </div>
                  <div className="zoom-container">
                    <img src={caro5} alt="img5" className="zoom-img" />
                    <h5 className="caroheader">Asiaway Holidays</h5>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="getoffer py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-10 col-lg-7 text-start">
              <div className="getoffertext">
                <h5>
                  Top Destination Management Company of Singapore, Malaysia
                </h5>
                <div className="getofferimg">
                  <img src={bg} alt="" />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-2 col-lg-5 d-flex justify-content-md-end mt-3 mt-md-0 getofferbtnmain">
              <div className="getofferbtn">
                <a href="https://sayakray98.github.io/asiaway/contact">
                  Get Offers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whatwedo p-3 pt-5 mt-2">
        <h5 className="whatwedoheading pb-4">What Asiaway Holidays Does</h5>
        <div className="container-fluid mt-4 ">
          <div className="row text-">
            <div className="col-lg-6 pl-5 colimgtextmain">
              <div className="colimgtext  ml-5">
                <div className="overlaynew"></div>
                <h5>Asiaway Holidays</h5>
              </div>
            </div>
            <div className="col-lg-6 ">
              <p className="readbtn">
                Asiaway Holidays is a destination management company / b2b tour
                operator providing seamless and comprehensive travel management
                services in Singapore & Malaysia through established on-ground
                partnerships. Backed by strong local tie-ups and deep
                destination knowledge, we ensure smooth coordination and
                reliable execution at every stage of the journey.
              </p>
              <p className="readbtnf mt-5">
                We offer end-to-end travel management solutions including
                customized itinerary planning, hotel and accommodation
                arrangements, ground transportation, sightseeing experiences,
                MICE services, visa assistance, and complete on-ground support
                in Singapore & Malaysia. Our experienced team manages every
                detail with precision, enabling our B2B partners and clients to
                deliver hassle-free, memorable travel experiences.
              </p>
            </div>
            {/* <a className="readmore " href="/">
              Read more
            </a> */}
          </div>
        </div>
      </section>

      <section className="explore pb-5">
        <h5 className="whatwedoheading p-3 my-3 py-3">
          Explore Top Attractions
        </h5>
        <div className="container-fluid mt-5">
          <div className="row m-0 p-0">
            <div className="col-lg-7 text-right m-0 p-0 ">
              <div className="mainimage">
                <img
                  src={singapore}
                  alt=""
                  style={{ width: "89%", height: "28.8rem" }}
                />
                <h5 className="headf">Singapore Flyer</h5>
              </div>
            </div>
            <div className="col-lg-5  text-left m-0 p-0 immain">
              <div className="imgsub">
                <div className="imgsubnew">
                  <img
                    src={singaporenext}
                    alt=""
                    style={{ width: "85%", height: "255px" }}
                  />
                  <h5 className="headfnew">Genting Highland Cable Car</h5>
                </div>

                <div className="row m-0 p-0 mt-4 pt-2">
                  <div className="col-lg-5 p-0 m-0">
                    <div className="subimgesfirst">
                      <img
                        src={singaporenext2}
                        alt=""
                        style={{ width: "94%", height: "10.69rem" }}
                      />
                      <h5 className="headf">Eagle Square Langkawi</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 text-left p-0 m-0 mainimagemain">
                    <div className="subimgeslast">
                      <img
                        src={singaporenext3}
                        alt=""
                        style={{ width: "87%", height: "10.69rem" }}
                      />
                      <h5 className="headf">International Cruise</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dmc">
        <h5 className="whatwedoheading p-3">Why Asiaway Holidays?</h5>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="subcolumns">
                <i class="fa-solid fa-money-check-dollar"></i>
                <h5 className="p-2">Effecctive Cost</h5>
                <p>
                  Our experienced team delivers prompt responses and transparent
                  pricing by sourcing rates directly from trusted on-ground
                  partners in Singapore, ensuring excellent value for our B2B
                  travel partners.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="subcolumns">
                <i class="fa-solid fa-toolbox"></i>
                <h5 className="p-2">Experience</h5>
                <p>
                  Backed by over 10 years of tour management expertise, our
                  founder and core team ensure smooth coordination and
                  end-to-end execution for a hassle-free travel experience.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="subcolumns">
                <i class="fa-solid fa-shield"></i>
                <h5 className="p-2">Safety & Security</h5>
                <p>
                  Now a days people are getting so much conscious to their
                  health and we are also taking it seriously as we are providing
                  you all security measures.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="gallery-section p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="whatwedoheading pb-4 ">
                Attractions in{" "}
                {category === "singapore" ? "Singapore" : "Malaysia"}
              </h5>

              <div className="mb-4 text-end category-wrapper mt-3">
                <button
                  className={`category-btn ${
                    category === "singapore" ? "active" : ""
                  }`}
                  onClick={() => setCategory("singapore")}
                  type="button"
                >
                  Singapore
                </button>

                <button
                  className={`category-btn ${
                    category === "malaysia" ? "active" : ""
                  }`}
                  onClick={() => setCategory("malaysia")}
                  type="button"
                >
                  Malaysia
                </button>
              </div>

              <Carousel
                responsive={responsivenew}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                centerMode={true}
                arrows={false}
                showDots={true}
                renderDotsOutside={true}
                itemClass="slider-card"
                containerClass="slider-container"
              >
                {filteredSlides.map((item, i) => (
                  <div className="gallery-card" key={i}>
                    <a href="https://sayakray98.github.io/asiaway/blog">
                      <img src={item.img} alt={item.alt} />
                    </a>
                    <h6 className="gallery-title">{item.title}</h6>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="video py-5">
        <div className="container-fluid">
          <div className="row mb-5 pb-4">
            <div className="col-lg-12 pb-5 mb-5">
              <div
                className="videoiframe"
                style={{ width: "100%", height: "450px" }}
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="bg-video"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="testimonial py-5 my-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="whatwedoheading pb-4">Testimonial</h5>
              <Carousel
                responsive={responsivenew}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                arrows={true}
                showDots={false}
                renderButtonGroupOutside={true}
                className="testimonial-carousel"
              >
                {testimonials.map((item, index) => (
                  <div className="testimonial-card-wrapper" key={index}>
                    <div className="testimonial-card">
                      <p className="testimonial-text">{item.text}</p>

                      <div className="testimonial-stars">
                        {"★".repeat(item.stars)}
                      </div>

                      <div className="testimonial-user-img">
                        <img src={item.img} alt={item.name} />
                      </div>

                      <h3 className="testimonial-name">{item.name}</h3>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="ourteam ">
        <div className="container ">
          <h5 className="team">Our Team</h5>
          <div className="row m-auto">
            <div className="col-lg-8 m-auto">
              <div className="imagetem">
                <img
                  src={ourteam}
                  alt=""
                  style={{ width: "100%", margin: "auto", textAlign: "cenetr" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="ourclients">
        <div className="container">
          <h5 className="whatwedoheading  mb-5 pb-3">Our Clients</h5>
          <div className="row mb-3">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image1} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image2} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image3} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image4} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image5} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image6} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image7} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image8} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image9} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image10} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image11} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="images">
                    <img src={slide_image12} alt="" style={{ width: "43%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}
