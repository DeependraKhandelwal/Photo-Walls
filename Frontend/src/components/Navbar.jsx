import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import MyCart from "./MyCart";
import SignUp from "./SignUp";
import Register from "./Register";
import "./Navbar.css";
export class Navbar2 extends Component {
  render() {
    return (
      <Router>
        <nav
          class="navbar navbar-expand-lg navbar-dark"
          style={{ backgroundColor: "#EFEFEF" }}
        >
          <Link
            class="navbar-brand"
            // style={{ padding: "15px 48px 12px 28px", borderRadius: "20px" }}
            to=""
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "30px",
              color: "black",
              paddingLeft: "30px",
            }}
          >
            PHOTO WALLS
          </Link>
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
            <ul class="navbar-nav me-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="">
                  <h4>Home</h4> <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/categories">
                  <h4>Categories</h4>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutUs">
                  <h4>About Us</h4>
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link" to="/myCart">
                  My Cart
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/signUp">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" style={{ marginLeft: "5px" }} href="#">
                  <h5>My Cart</h5>
                </a>
              </li> */}
            </ul>
          </div>
          <ul class="navbar-nav d-flex me-4">
            <li class="nav-item ">
              {" "}
              <Link class="nav-link" href="#">
                <h4>Login</h4>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container mt-2">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/categories" component={Categories} />
            <Route path="/aboutUs" component={AboutUs} />
            <Route path="/myCart" component={MyCart} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar2;
