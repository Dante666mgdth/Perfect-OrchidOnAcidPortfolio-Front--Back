import React from "react";
import "../assets/css/style.css";

export default function Footer() {
  return (
    <div>
      <footer
        class="ftco-footer ftco-section img"
        style={{ padding: "0", paddingTop: "2 0px", height: "400px" }}
      >
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-3">
              <div class="ftco-footer-widget mb-4">
                <h2 class="ftco-heading-2 logo">
                  <a href="index.html">ORCHIDS0NACID</a>
                </h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li class="ftco-animate">
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                  </li>
                  <li class="ftco-animate">
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                  </li>
                  <li class="ftco-animate">
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <form action="https://orchids0nacid.artstation.com">
          <input type="submit" value="Go to Projects" />
        </form> */}
      </footer>
    </div>
  );
}
