import React from 'react'
import {useHistory} from "react-router-dom";

function Navbar2() {

let history=useHistory();

    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "black" }}>
          <a class="navbar-brand" href="" onClick={()=>{history.push("/HomeProduct")}}>Photo Shopee</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="" onClick={()=>{history.push("/HomeProduct")}}>Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" onClick={()=>{history.push("/createCategories")}}>Create Categories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" onClick={()=>{history.push("/edit/updateCategory")}}>Edit/Update Category</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" onClick={()=>{history.push("/edit/updateProduct")}}>Edit/Update Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" onClick={()=>{history.push("/allProduct")}}>All Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="" onClick={()=>{history.push("/allOrders")}}>All Orders</a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
    )
}

export default Navbar2
