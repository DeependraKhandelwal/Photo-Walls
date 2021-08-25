import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {useHistory} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import MyCart from "./MyCart";
import SignIn from "./SignIn";
import Register from "./Register";
export function Navbar2() {
  let history=useHistory();
    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "black" }}>
          <a class="navbar-brand" onClick={()=>{history.push("/")}} to="">Photo Shopee</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" onClick={()=>{history.push("/")}} >Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/categories")}}>Categories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/aboutUs")}}>About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/myCart")}}>My Cart</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/signIn")}}>Signin</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/register")}}>Register</a>
              </li>
            </ul>
          </div>
        </nav>
    )
  
}

export default Navbar2
