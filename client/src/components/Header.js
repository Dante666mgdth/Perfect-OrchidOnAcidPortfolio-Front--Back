import React, { useState } from "react";
import "../assets/css/style.css";
import close from "../assets/close.png";
import Dropdown from "./Dropdown";
export default function Header() {
  const [toogle, setToogle] = useState(false);
  return (
    <div>
      <header>
        <div class="container" style={{ position: "relative" }}>
          <div class="colorlib-navbar-brand">
            <a class="colorlib-logo" href="index.html">
              ORCHIDS0NACID
              <br />
              <span></span>
            </a>
          </div>
          <a
            href="#"
            class="js-colorlib-nav-toggle colorlib-nav-toggle"
            onClick={() => setToogle(!toogle)}
          >
            {toogle ? <img className="close" src={close} /> : <i></i>}
          </a>
          {toogle ? <Dropdown /> : null}
        </div>
      </header>
    </div>
  );
}
