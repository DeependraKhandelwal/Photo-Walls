import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import LoginAction from "./LoginAction";
import login from "../images/login.jpg";
function SignIn() {
  let history = useHistory();
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  function formValidate() {
    const form = document.querySelector("form");
    var uName = form.elements.username.value;
    var upassword = form.elements.password.value;

    var error = document.getElementById("error");
    //   var error1=document.getElementById("error1")

    var lgn = document.getElementById("formlogin");
    //   error1.innerHTML=""

    if (uName.length < 5) {
      error.innerHTML = "User Name must be minimum 5 char";
    } else if (upassword.length < 8) {
      error.innerHTML = "Password must be minimum 8 char";
    } else {
      error.innerHTML = "Ready to Submit";
      lgn.style.pointerEvents = "auto";
    }
  }

  return (
    <Router>
      <Navbar />
      <div id="SgIForm">
        <section class="vh-100" style={{ backgroundcolor: "#eee" }}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ borderradius: "25px" }}>
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <Switch>
                          <Route path="/loginactions">
                            <LoginAction
                              userName={userName}
                              password={password}
                            />
                          </Route>
                        </Switch>
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Sign In
                        </p>

                        <form class="mx-1 mx-md-4">
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                name="username"
                                onInput={formValidate}
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                              />
                              <label class="form-label" for="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                name="password"
                                onInput={formValidate}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <label class="form-label" for="form3Example4cd">
                              Don't have account?{" "}
                              <a
                                href="#"
                                onClick={() => {
                                  history.push("/register");
                                }}
                              >
                                Sign up here
                              </a>
                            </label>
                          </div>

                          <div className="text-danger">
                            <p id="error" style={{ backgroundColor: "" }}></p>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link
                              to="/loginactions"
                              id="formlogin"
                              style={{ pointerEvents: "none", color: "black" }}
                              type="button"
                              class="btn btn-dark btn-lg"
                            >
                              <span style={{ color: "whitesmoke" }}>
                                SUBMIT
                              </span>
                            </Link>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1 order-lg-2">
                        <img
                          src={login}
                          class="img-fluid"
                          style={{ height: "400px" }}
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Router>
  );
}

export default SignIn;
