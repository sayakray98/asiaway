import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import caro1 from "../assets/images/caro1.jpg";
import caro2 from "../assets/images/caro2.jpg";
import caro3 from "../assets/images/caro3.jpg";
import bg from "../assets/images/bg.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import singapore from "../assets/images/Singapore-scaled-e1638532756248.jpg";
import singaporenext from "../assets/images/637590063144011980_M-e1638532587.jpg";
import singaporenext2 from "../assets/images/botanic-gardens-e1638532496904.jpg";
import singaporenext3 from "../assets/images/istockphoto-617882378-612x612-1.jpg";
import slide_image_1 from "../assets/images/Singapore-Zoo-e1638616869286.jpg";
import slide_image_2 from "../assets/images/jurong-bird-park.jpg";
import slide_image_3 from "../assets/images/night-safari-park-e1638617216808.jpg";
import slide_image_4 from "../assets/images/marina-bay-sands-e1638616992819 (1).jpg";
import slide_image_5 from "../assets/images/Sentosa-Island-Singapore-scaled-e1638617119691.jpg";

import slide_image1 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.40.10-PM-3.jpg";
import slide_image2 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.40.10-PM.jpeg";
import slide_image3 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.40.10-PM-2.jpeg";
import slide_image4 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.40.10-PM-1.jpg";
import slide_image5 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.32.35-PM.jpeg";
import slide_image6 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.32.34-PM.jpeg";
import slide_image7 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.32.34-PM-2.jpg";
import slide_image8 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.14.26-PM-1.jpg";
import slide_image9 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.32.56-PM.jpeg";
import slide_image10 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.14.26-PM-2.jpg";
import slide_image11 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.14.55-PM.jpeg";
import slide_image12 from "../assets/images/WhatsApp-Image-2021-12-08-at-12.14.26-PM.jpeg";

import user1 from "../assets/images/img-1.jpg";
import ourteam from "../assets/images/9dc25624-5e22-4dc8-885b-20c5e5c61a23-1086x1536.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

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

  const sliderData = [
    { img: slide_image_1, title: "Night Safari" },
    { img: slide_image_2, title: "Jurong bird park" },
    { img: slide_image_3, title: "Singapore Zoo" },
    { img: slide_image_4, title: "Marina bay sands" },
    { img: slide_image_5, title: "Sentosa Island Singapore" },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 60, // left+right preview
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };
  const responsivenew = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
      partialVisibilityGutter: 40,
    },
  };
  return (
    <>
      <Header />

      <section className="homeCarosel">
        <div className="container-fluid m-0 p-0 ">
          <div className="row m-0 p-0">
            <div className="col-lg-12 p-0 m-0">
              <div className="home-demo">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={10}
                  navigation={false}
                  pagination={false}
                  loop={true}
                  autoplay={true}
                >
                  <SwiperSlide>
                    <div className="zoom-container">
                      <img src={caro1} alt="img1" className="zoom-img" />
                      <h5 className="caroheader">
                        Your Vacation DMC in <br />
                        Singapore
                      </h5>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="zoom-container">
                      <img src={caro2} alt="img2" className="zoom-img" />
                      <h5 className="caroheader">
                        Your Vacation DMC in <br />
                        Singapore
                      </h5>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="zoom-container">
                      <img src={caro3} alt="img3" className="zoom-img" />
                      <h5 className="caroheader">
                        Your Vacation DMC in <br />
                        Singapore
                      </h5>
                    </div>
                  </SwiperSlide>
                </Swiper>
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
                <h5>Top Destination Management Company Of Singapore</h5>
                <div className="getofferimg">
                  <img src={bg} alt="" />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-2 col-lg-5 d-flex justify-content-md-end mt-3 mt-md-0 getofferbtnmain">
              <div className="getofferbtn">
                <a href="#">Get Offers</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="whatwedo  p-3">
        <h5 className="whatwedoheading pb-4">What We Do</h5>
        <div className="container-fluid mt-4 ">
          <div className="row text-">
            <div className="col-lg-6 pl-5 colimgtextmain">
              <div className="colimgtext  ml-5">
                <div className="overlaynew"></div>
                <h5>YOUR VACATION</h5>
              </div>
            </div>
            <div className="col-lg-6 ">
              <h5 className="text-left">
                Your Vacation Pte Ltd is one of the most leading tour <br />{" "}
                operator and destination management company that <br />
                delivers all the travel management services in Singapore.
              </h5>
              <p className="text-left mt-5">
                We are also providing business to business management DMC
                services in <br /> Singapore under the Singapore Tourism board
                Licenses No (02848). <br /> We are supplying our all experience
                to agencies, corporations, organizations <br /> and
                associations. If anybody want to explore the Singapore at any
                extent then <br /> you should go with Your Vacation Pte Ltd as
                we are the most trust-able and <br /> professionals with taking
                your all the safety measures.
              </p>
            </div>
            <a className="readmore " href="/">
              Read more
            </a>
          </div>
        </div>
      </section>

      <section className="explore pb-5">
        <h5 className="whatwedoheading p-3">Explore Top Attractions</h5>
        <div className="container-fluid mt-5">
          <div className="row m-0 p-0">
            <div className="col-lg-7 text-right m-0 p-0">
              <div className="mainimage">
                <img
                  src={singapore}
                  alt=""
                  style={{ width: "89%", height: "28.8rem" }}
                />
                <h5 className="headf">Gardens By The Bay</h5>
              </div>
            </div>
            <div className="col-lg-5  text-left m-0 p-0">
              <div className="imgsub">
                <div className="imgsubnew">
                  <img
                    src={singaporenext}
                    alt=""
                    style={{ width: "85%", height: "255px" }}
                  />
                  <h5 className="headfnew">Sentosa</h5>
                </div>

                <div className="row m-0 p-0 mt-4 pt-2">
                  <div className="col-lg-5 p-0 m-0">
                    <div className="subimgesfirst">
                      <img
                        src={singaporenext2}
                        alt=""
                        style={{ width: "94%", height: "10.69rem" }}
                      />
                      <h5 className="headf">Botanic Garden</h5>
                    </div>
                  </div>
                  <div className="col-lg-6 text-left p-0 m-0">
                    <div className="subimgeslast">
                      <img
                        src={singaporenext3}
                        alt=""
                        style={{ width: "87%", height: "10.69rem" }}
                      />
                      <h5 className="headf">Marine Bay Sands</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dmc">
        <h5 className="whatwedoheading p-3">
          DMC in Singapore (Why Choose Us)
        </h5>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4">
              <div className="subcolumns">
                <i class="fa-solid fa-money-check-dollar"></i>
                <h5 className="p-2">Effecctive Cost</h5>
                <p>
                  We mainly deals into B2B, So it will be beneficial for you to
                  work in B2B rates which nobody can provide you in the market
                  for Singapore DMC.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="subcolumns">
                <i class="fa-solid fa-toolbox"></i>
                <h5 className="p-2">Experienced</h5>
                <p>
                  We have a great graph with our clients in B2B traveling in
                  Singapore for DMC. We also understands our clients which makes
                  us different from others.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="subcolumns">
                <i class="fa-solid fa-shield"></i>
                <h5 className="p-2">Safety & Security</h5>
                <p>
                  Now a days people are getting so much conscious to their
                  health and we are also taking it seriously as we are providing
                  you all security measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="fantastic overlay p-2">
        <h5 className="whatwedoheadingnew pb-4 pt-5">FANTASTIC FACTS</h5>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="counters">
                <h5>{count}</h5>
                <p>Satisfied Customers</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="counters">
                <h5>{count}</h5>
                <p>Registered Companies</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="counters">
                <h5>{count}</h5>
                <p>Contracts</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="counters">
                <h5>{count}</h5>
                <p>AWARDS WON</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="gallery-section p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="whatwedoheading pb-4">Attractions in Singapore</h5>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                centerMode={true}
                arrows={true}
                showDots={true}
                renderDotsOutside={true}
                itemClass="slider-card"
                containerClass="slider-container"
              >
                {sliderData.map((item, i) => (
                  <div className="gallery-card" key={i}>
                    <img src={item.img} alt={item.title} />
                    <p className="gallery-title">{item.title}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section className="video py-5 my-5">
        <div className="container-fluid">
          <div className="row mb-5 pb-4">
            <div className="col-lg-12 pb-5 mb-5">
              <div style={{ width: "100%", height: "450px" }}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/T3KYywFTpY0?autoplay=1&mute=1&loop=1&playlist=T3KYywFTpY0&controls=0&modestbranding=1&showinfo=0&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "700px",
                  }}
                ></iframe>
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
