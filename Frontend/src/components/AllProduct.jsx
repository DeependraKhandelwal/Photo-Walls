import React from 'react'
import category1 from "../images/category1.jpeg"
import Navbar2 from './Navbar2'
function AllOrder() {
    return (
        <div>
            <Navbar2/>
            <div class="container mt-5">
            <h1 class="text-center font-weight-normal">Photos</h1>

            <div class="container mt-4 d-flex mb-5">
                <div class="row">
                    <div class="col-md-4 mt-5">
                        <div class="card">
                            <img src={category1} class="card-image-top w-100" />
                            <div class="crad-body">
                                <h2 >Coder</h2>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">A Person Doing Coding</p>
                                    <p class="card-text mr-4 text-success">₹100</p>
                                </div>
                                <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-4 mt-5">
                        <div class="card">
                            <img src={category1} class="card-image-top w-100" />
                            <div class="crad-body">
                                <h2 class="card-title">Sports Bike</h2>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">Yeloow Sports bike and car</p>
                                    <p class="card-text mr-4 text-success">₹150</p>
                                </div>
                                <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-4 mt-5">
                        <div class="card">
                            <img src={category1} class="card-image-top w-100" />
                            <div class="crad-body">
                                <h2 class="card-title">Coder</h2>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">A Person Doing Coding</p>
                                    <p class="card-text mr-4 text-success">₹100</p>
                                </div>
                                <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-4 mt-5">
                        <div class="card">
                            <img src={category1} class="card-image-top w-100" />
                            <div class="crad-body">
                                <h2 class="card-title">Coder</h2>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">A Person Doing Coding</p>
                                    <p class="card-text mr-4 text-success">₹100</p>
                                </div>
                                <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-4 mt-5">
                        <div class="card">
                            <img src={category1} class="card-image-top w-100" />
                            <div class="crad-body">
                                <h2 class="card-title">Coder</h2>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">A Person Doing Coding</p>
                                    <p class="card-text mr-4 text-success">₹100</p>
                                </div>
                                <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>

                            </div>

                        </div>

                    </div>

                    <div class="col-md-4 mt-5">
                        <div class="card">
                            <img src={category1} class="card-image-top w-100" />
                            <div class="crad-body">
                                <h2 class="card-title">Coder</h2>
                                <div class="d-flex justify-content-between">
                                    <p class="card-text">A Person Doing Coding</p>
                                    <p class="card-text mr-4 text-success">₹100</p>
                                </div>
                                <a href="#" class="card-link" data-toggle="modal" data-target="#modalId"> More</a>

                            </div>

                        </div>

                    </div>

                </div>




            </div>




        </div>
        </div>
    )
}

export default AllOrder
