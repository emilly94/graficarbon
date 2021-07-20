import React from "react";
import "../style/css/style.css";
import { Link, animateScroll as scroll } from "react-scroll";
const Header = () => {
  return (
    <header class="masthead">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class="col-lg-6">
            <div class="mb-5 mb-lg-0 text-center text-lg-start">
            <h1 class="display-1 lh-1 mb-3">Sejam <br></br> Bem-vindos</h1>
              <a class="btn btn-primary btn-lg" href="/products">
                <Link
                activeClass="active"
                to="produtos"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Nossos Produtos
              </Link></a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="masthead-device-mockup">
              <div class="device-wrapper">
                <div class="device"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;