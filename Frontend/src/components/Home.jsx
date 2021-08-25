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
function Home() {
  return (
    <div className="container">
      <br></br>
      <br></br>
      <br></br>

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
        data-interval="2000"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={carousel1} alt="First slide" />
            <div class="d-none d-md-block text-dark">
              <h3>Vintage Collections</h3>
              Decorate your walls with millions of prints, coming from the best
              artists around the world, in a swide variety of styles. But more
              importantly, we’ll help you find just the right one.
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={carousel2} alt="Second slide" />
            <div class="d-none d-md-block text-dark">
              <h3 className="fw-bolder">Shop in Fashion Category</h3>
              <p>
                Decorate your walls with millions of prints, coming from the
                best artists around the world, in a wide variety of styles. But
                more importantly, we’ll help you find just the right one.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={carousel3} alt="Third slide" />
            <div class="d-none d-md-block text-dark">
              <h3 className="fw-bolder">Inspirational</h3>
              <p>
                Decorate your walls with millions of prints, coming from the
                best artists around the world, in a wide variety of styles. But
                more importantly, we’ll help you find just the right one.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <br></br>
<br></br>
<table style={{ padding: "100px 18px 3px 18px", backgroundColor: "" }}><tr>
<td style={{width:"50%"}}><hr/></td>
<h1 class="text-center text-secondary" style={{ textalign: "center",backgroundColor: "" }}>Happy Customers</h1>
<td style={{width:"50%"}}><hr/></td>
</tr></table> */}

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>

      <h1
        class="text-center"
        style={{ padding: "100px 18px 3px 18px", color: "black" }}
      >
        Happy Customers
      </h1>

      <br></br>

      <div class="container">
        <div class="row row-cols-4">
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
      <br></br>
      <br></br>
      <br></br>
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
                BestOfBharat
              </p>
              <span class="text-center d-inline-block">
                <a class="btn btn-primary btn-lg w-100" href="#" role="button">
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
    </div>
  );
}

export default Home;
