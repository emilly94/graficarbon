import React from "react";
import { Nav } from "react-bootstrap/";
import Image from "react-bootstrap/Image";
import Logo from "../style/img/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/home"
      class="navbar navbar-expand-lg navbar fixed-top navbar-light bg-light"
    >
        <Image width={300} src={Logo} fluid />
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/home">
              <Link
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              />
              Home <span class="sr-only">(Página atual)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/products">
              <Link
                activeClass="active"
                to="produtos"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Produtos
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
              >
                Sobre
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/footer">
              {" "}
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contato
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
