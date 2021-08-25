import React from 'react'
import {useHistory} from "react-router-dom";
import "../components/Navbar.css"

export function Navbar2() {
  let history=useHistory();
    return (
        <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#EFEFEF" }}>
          <a class="navbar-brand" onClick={()=>{history.push("/")}} style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "30px",
              color: "black",
              paddingLeft: "30px",
            }} to="">Photo Shopee</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" onClick={()=>{history.push("/")}} ><h4 style={{color:'black',fontfamily:'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}>Home</h4><span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/categories")}}><h4 style={{color:'black',fontfamily:'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}>Categories</h4></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/aboutUs")}}><h4 style={{color:'black',fontfamily:'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}>About Us</h4></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/myCart")}}><h4 style={{color:'black',fontfamily:'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}>My Cart</h4></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/signIn")}}><h4 style={{color:'black',fontfamily:'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}>Signin</h4></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={()=>{history.push("/register")}}><h4 style={{color:'black',fontfamily:'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif'}}>Register</h4></a>
              </li>
            </ul>
          </div>
        </nav>
    )
  
}

export default Navbar2
