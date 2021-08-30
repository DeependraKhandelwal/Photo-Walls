import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

export function Navbar2() {
  let history = useHistory();
  return (
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <a
        class="navbar-brand"
        href=""
        onClick={() => {
          history.push("/");
        }}
        style={{
          fontFamily: "Open Sans, sans-serif",
          fontSize: "30px",
          color: "black",
          paddingLeft: "30px",
        }}
      >
        PHOTO WALLS
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a
              class="nav-link"
              href=""
              onClick={() => {
                history.push("/aboutUs");
              }}
            >
              <h4
                style={{
                  color: "black",
                  fontfamily:
                    "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                }}
              >
                About Us
              </h4>
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href=""
              onClick={() => {
                history.push("/categories");
              }}
            >
              <h4
                style={{
                  color: "black",
                  fontfamily:
                    "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                }}
              >
                Categories
              </h4>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href=""
              onClick={() => {
                history.push("/CreateCustomer");
              }}
            >
              <h4
                style={{
                  color: "black",
                  fontfamily:
                    "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                }}
              >
                Customer
              </h4>
            </a>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav d-flex me-4">
        <li class="nav-item">
          <a
            class="nav-link"
            href=""
            onClick={() => {
              history.push("/myCart");
            }}
          >
            <h4
              style={{
                color: "black",
                fontfamily:
                  "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
              }}
            >
              <i class="bi bi-cart-fill" style={{ fontSize: "20px" }}></i> Cart
            </h4>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href=""
            onClick={() => {
              history.push("/signIn");
            }}
          >
            <h4
              style={{
                color: "black",
                fontfamily:
                  "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                fontSize: "20px",
              }}
            >
              LOGIN
            </h4>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar2;
