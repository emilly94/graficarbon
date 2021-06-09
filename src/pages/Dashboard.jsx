import React from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/dashboard.css";

import Footer from "../components/Footer";
import Main from "../components/Main";
import EscovaGrafite from "../assets/img/escovaDeCarvão_auto_x2.jpg";
import PalhetaGrafite from "../assets/img/PalhetasDeGrafite_auto_x2.png";
import PinoGrafite from "../assets/img/PinosDeGrafite_auto_x2.png";

const Index = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src={EscovaGrafite}
            alt="First slide"
            className="imgCarousel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={PalhetaGrafite}
            alt="Second slide"
            className="imgCarousel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src={PinoGrafite} alt="Third slide" className="imgCarousel"/>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <Main />
      <br></br>
      <Footer />
    </div>
  );
};

export default Index;
