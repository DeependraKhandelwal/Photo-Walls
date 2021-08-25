import { left } from "@popperjs/core";
import React from "react";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import carousel3 from "../images/carousel3.jpg";
import S1 from "../images/S1.png";
import S2 from "../images/S2.png";
import S3 from "../images/S3.png";
import S4 from "../images/S4.png";
import W1 from "../images/W1.png";
import "./Home.css";
function Home() {

  return (
    <div className="container">
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="1300">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={carousel1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={carousel2} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={carousel3} alt="Third slide" />
          </div>
        </div>
      </div>

      <h1 class="text-center text-secondary" style={{ padding: "100px 18px 3px 18px", backgroundColor: "" }}>Happy Customers</h1>

      <br></br>

      <div class="container">
        <div class="row row-cols-3">
          <div class="col">
            <img class="d-block w-100" src={S1} alt="First slide" />
          </div>
          <div class="col">
            <img class="d-block w-100" src={S2} alt="First slide" />
          </div>
          <div class="col">
            <img class="d-block w-100" src={S3} alt="First slide" />
          </div>
          <div class="col">
            <img class="d-block w-100" src={S4} alt="First slide" />
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
              <p class="lead">Explore set of wall art that look good together. Exclusively at BestOfBharat</p>
              <span class="text-center d-inline-block">
                <a class="btn btn-primary btn-lg w-100" href="#" role="button">Shop Now</a>
              </span>

            </div>
            <div class="col-lg-4 align-items-center d-flex">
              <img src={W1} alt="" class="img-fluid" />
            </div>

          </div>


        </div>
      </div>

    </div>
  );
}

export default Home;
