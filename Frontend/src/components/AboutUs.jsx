import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./AboutUs.css";
class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="aboutus-section">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="aboutus">
                  <h2 class="aboutus-title">About Us</h2>
                  <p class="aboutus-text">
                    Photo Walls is an imperative resource for searching,
                    purchasing and downloading creative Indian images and
                    videos.{" "}
                  </p>
                  <p class="aboutus-text">
                    Thousands of leading brands across the globe have been using
                    our content for their advertising, marketing and publishing
                    needs.
                  </p>
                  {/* <a class="aboutus-more" href="#">read more</a> */}
                </div>
              </div>
              <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="aboutus-banner">
                  <img
                    src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-5 col-sm-6 col-xs-12">
                <div class="feature">
                  <div class="feature-box">
                    <div class="clearfix">
                      <div class="iconset">
                        <span class="glyphicon glyphicon-cog icon"></span>
                      </div>
                      <div class="feature-content">
                        <h3>Photo Walls Philosophy</h3>
                        <p>
                          India's people, traditions and values associated with
                          distinctive regional customs & festivals. That's why
                          our images reflects the innate expressions of
                          deep-rooted feelings of individuals through which
                          spring their day-to-day actions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="feature-box">
                    <div class="clearfix">
                      <div class="iconset">
                        <span class="glyphicon glyphicon-cog icon"></span>
                      </div>
                      <div class="feature-content">
                        <h3>People Behind Photo Walls</h3>
                        <p>
                          Photo Shopee is a collective endeavour of thousands of
                          passionate photographers led by Sandeep Maheshwari,
                          who is a World Record Holder in creative photography.
                          Our team is forever on the move, to capture the
                          essence of India for serving it to the global
                          audience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div class="feature-box">
                    <div class="clearfix">
                      <div class="iconset">
                        <span class="glyphicon glyphicon-cog icon"></span>
                      </div>
                      <div class="feature-content">
                        <h3>What Photo Walls Offers</h3>
                        <p>
                          {" "}
                          Photo Shopee offers an immense advantage with its vast
                          database of images that are reflective of India,
                          making them available in the most accessible way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default AboutUs;
