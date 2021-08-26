import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
function ContactUs() {
    return (
        <div>
            <Navbar/>
            <div class="fullWidth contactwel">
                <div class="container">
                    <div class="row conbody">
                        <div class="col-md-1"></div>
                        <div class="col-md-4 text-left">
                            <h3>Address</h3>
                            <p>Plat No.154, B Ayodhaya Nagar,<br></br>
                                Kanha Vihar, Bhura Patel Marg,<br />
                                Near stadium,<br /><br />
                                Contact: +91-987654321<br /><br />
                                Email: abcd@gmail.com<br />
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <br /><br />
            <div class="container-fluid">
                <div class="row">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.6933426864!2d-0.3817855154247799!3d51.52830796345118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2sin!4v1526460653096" width="100%" height="300" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs
