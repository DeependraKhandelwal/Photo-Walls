import React from "react";
import { useHistory } from "react-router-dom";
function Footer() {
  let history = useHistory();
  return (
    <footer
      class="page-footer font-small indigo"
      style={{ backgroundColor: "#EFEFEF" }}
    >
      <div class="container">
        <div class="row text-center d-flex justify-content-center pt-5 mb-3">
          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a
                href=""
                onClick={() => {
                  history.push("/aboutUs");
                }}
              >
                Our Company
              </a>
            </h6>
          </div>
          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a
                href=""
                onClick={() => {
                  history.push("/categories");
                }}
              >
                Category
              </a>
            </h6>
          </div>
          <div class="col-md-2 mb-3">
            <h6 class="text-uppercase font-weight-bold">
              <a
                href=""
                onClick={() => {
                  history.push("/contactus");
                }}
              >
                Contact Us
              </a>
            </h6>
          </div>
        </div>

        {/* <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
          <div class="col-md-8 col-12 mt-5">
            <p style={{ lineHeight: "1.71rem" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
          </div>
        </div> */}
        {/* <hr
          class="clearfix d-md-none rgba-white-light"
          style={{ margin: "10% 15% 5%" }}
        /> */}
      </div>
      <div class="container pt-4">
        <section class="mb-4">
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/"
            target="_blank"
            role="button"
          >
            <i class="bi bi-facebook"></i>
          </a>

          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/"
            target="_blank"
            role="button"
          >
            <i class="bi bi-twitter"></i>
          </a>

          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="https://www.instagram.com/"
            target="_blank"
            role="button"
          >
            <i class="bi bi-instagram"></i>
          </a>

          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/"
            target="_blank"
            role="button"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </section>
      </div>
      <div class="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="http://localhost:3000/"> PhotoWalls.com</a>
      </div>
    </footer>
  );
}

export default Footer;
