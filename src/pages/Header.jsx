import React from "react";
import "../style/css/style.css";
import { Image } from "react-bootstrap";
import { logo } from '../style/img/header-bg.jpeg'
const Header = () => {
  return (
    <header class="masthead">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <div class="mb-5 mb-lg-0 text-center text-lg-start">
              <div class="display-1 lh-1 mb-3">Sejam</div>
              <div class="display-1 lh-1 mb-3">Bem-vindos.</div>
              <a class="btn btn-primary btn-lg" href="#products">Nossos produtos</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="masthead-device-mockup">
              <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                    <stop class="gradient-start-color" offset="0%"></stop>
                    <stop class="gradient-end-color" offset="100%"></stop>
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50"></circle>
              </svg>
              <div class="device-wrapper">
                <div class="device">
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;