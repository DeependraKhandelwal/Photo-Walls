import { left } from "@popperjs/core";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import carousel3 from "../images/carousel3.jpg";
import S1 from "../images/S1.png";
import S2 from "../images/S2.png";
import S3 from "../images/S3.png";
import S4 from "../images/S4.png";
import W1 from "../images/W1.png";
import featured1 from "../images/featured1.png";
import featured2 from "../images/featured2.png";
import featured3 from "../images/featured3.png";
import featured4 from "../images/featured4.png";
import featured5 from "../images/featured5.png";
import { useHistory } from "react-router-dom";
import "./Home.css";
function Home() {
  let history = useHistory();
  return (
    <div>
      <Navbar />
      <div className="container ">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
          data-interval="2000"
          style={{
            backgroundColor: "#EFEFEF",
            paddingLeft: "30px",
            paddingRight: "30px",
            padding: "30px 30px 30px 30px",
            marginTop: "50px",
          }}
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={carousel1} alt="First slide" />
              <div class="d-none d-md-block text-dark">
                <h3>All new Vintage Collections</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={carousel2} alt="Second slide" />
              <div class="d-none d-md-block text-dark">
                <h3>Shop in Fashion Category</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={carousel3} alt="Third slide" />
              <div class="d-none d-md-block text-dark">
                <h3>Be Inspired and Shop in Inspirational</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4
        style={{
          backgroundColor: "rgba(170, 40, 17, 0.96)",
          color: "whitesmoke",
          padding: "30px 30px 30px 30px",
          margin: "80px 35px 80px 35px",
        }}
      >
        Decorate your walls with millions of prints, coming from the best
        artists around the world, in a wide variety of styles. But more
        importantly, we’ll help you find just the right one.
      </h4>
      {/* <br></br>
      <hr />

      <br></br>
      <br></br>
      <br></br> */}

      <div class="container">
        <div class="separator">
          <h1>Featured Collections</h1>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col">
            <img class="d-block w-100" src={featured1} alt="First slide" />
            <h4>Vintage</h4>
          </div>
          <div class="col">
            <img class="d-block w-100" src={featured2} alt="First slide" />
            <h4>Botanical</h4>
          </div>
          <div class="col">
            <img class="d-block w-100" src={featured3} alt="First slide" />
            <h4>Line Art</h4>
          </div>
          <div class="col">
            <img class="d-block w-100" src={featured4} alt="First slide" />
            <h4>Animals</h4>
          </div>
          <div class="col">
            <img class="d-block w-100" src={featured5} alt="First slide" />
            <h4>Romantic</h4>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="jumbotron">
        <div class="container text-center text-lg-left">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="display-4">Walls that impress</h1>
              <h2>understand your choice</h2>
              <p class="lead">
                Explore set of wall art that look good together. Exclusively at
                Photo
              </p>
              <span class="text-center d-inline-block">
                <a
                  class="btn btn-primary btn-lg w-100"
                  href=""
                  onClick={() => {
                    history.push("/categories");
                  }}
                  role="button"
                >
                  Shop Now
                </a>
              </span>
            </div>
            <div class="col-lg-4 align-items-center d-flex">
              <img src={W1} alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <h1
          class="text-center text-secondary"
          style={{ padding: "70px 18px 3px 18px" }}
        >
          Happy Customers
        </h1>
        <br></br>
        <div
          class="row justify-content-center"
          style={{ paddingBottom: "50px" }}
        >
          <div class="col-2">
            <img class="d-block w-100" src={S1} alt="First slide" />
          </div>
          <div class="col-2">
            <img class="d-block w-100" src={S2} alt="First slide" />
          </div>
          <div class="col-2">
            <img class="d-block w-100" src={S3} alt="First slide" />
          </div>
          <div class="col-2">
            <img class="d-block w-100" src={S4} alt="First slide" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
