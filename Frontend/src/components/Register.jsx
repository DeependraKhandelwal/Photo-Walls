import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import register from "../images/register.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignUpAction from "./SignUpAction.js";
function Register({ adduser, registerAction }) {
  const [SgUForm, setSgUForm] = useState({
    userName: "",
    userRole: "",
    password: "",
  });

  let [submit, setSubmit] = useState({
    userName: "",
    userRole: "",
    password: "",
  });

  function formValidate() {
    const form = document.querySelector("form");
    var uType = form.elements.usertype.value;
    var uName = form.elements.username.value;
    var upassword = form.elements.password.value;
    var link = document.getElementById("formregister");

    var error = document.getElementById("error");
    var error1 = document.getElementById("error1");
    error1.innerHTML = "";
    if (uName.length < 3) {
      error.innerHTML = "User Name must be minimum 3 char";
    } else if (uType === "select") {
      error.innerHTML = "select usertype";
    } else if (upassword.length < 8) {
      error.innerHTML = "Password must be minimum 8 char";
    } else {
      error.innerHTML = " ";
      link.style.pointerEvents = "auto";
    }
  }

  let history = useHistory();
  return (
    <Router>
      <Navbar />
      <div id="SgUForm">
        <section class="vh-100" style={{ backgroundcolor: "#eee" }}>
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-12 col-xl-11">
                <div class="card text-black" style={{ borderradius: "25px" }}>
                  <div class="card-body p-md-5">
                    <div class="row justify-content-center">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <Switch>
                          <Route path="/signupactions">
                            <SignUpAction SgUForm={SgUForm} />
                          </Route>
                        </Switch>
                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Register
                        </p>

                        <form id="form" class="mx-1 mx-md-4">
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                name="username"
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                onInput={formValidate}
                                value={SgUForm.userName}
                                onChange={(e) =>
                                  setSgUForm({
                                    ...SgUForm,
                                    userName: e.target.value,
                                  })
                                }
                              />
                              <label class="form-label" for="form3Example1c">
                                Your Name
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                name="usertype"
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                onInput={formValidate}
                                value={SgUForm.userRole}
                                onChange={(e) =>
                                  setSgUForm({
                                    ...SgUForm,
                                    userRole: e.target.value,
                                  })
                                }
                              />
                              <label class="form-label" for="form3Example3c">
                                Your Role
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                name="password"
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                onInput={formValidate}
                                value={SgUForm.password}
                                onChange={(e) =>
                                  setSgUForm({
                                    ...SgUForm,
                                    password: e.target.value,
                                  })
                                }
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          {/* <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" class="form-control" />
                                                    <label class="form-label" for="form3Example4cd" onInput={formValidate}  value={SgUForm.userName}  onChange={e => setSgUForm({...SgUForm,userName : e.target.value})}>Repeat your password</label>
                                                </div>
                                            </div> */}

                          <div className="text-danger">
                            <p id="error" style={{ backgroundColor: "" }}></p>
                          </div>
                          <div className="row btn-group">
                            <div className="text-warning">
                              <p
                                id="error1"
                                style={{ backgroundColor: "" }}
                              ></p>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link
                              to="/signupactions"
                              id="formregister"
                              style={{ pointerEvents: "none", color: "black" }}
                              class="btn btn-dark btn-lg"
                            >
                              <span style={{ color: "whitesmoke" }}>
                                Register
                              </span>
                            </Link>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex order-1 justify-content-center order-lg-2">
                        <img
                          src={register}
                          class="img-fluid"
                          alt="Sample image"
                          style={{ height: "400px" }}
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

export default Register;
