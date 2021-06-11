import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/css/style.css";

import EscovaGrafite from "../style/img/EscovaDeCarvao.png";
import PalhetaGrafite from "../style/img/palhetasDeGrafite.png";
import PinoGrafite from "../style/img/pinosDeGrafite.png";

const Header = () => {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            src={EscovaGrafite}
            alt="First slide"
            className="d-block w-90"
            id="imgCarousel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={PalhetaGrafite}
            alt="Second slide"
            className="d-block w-90"
            id="imgCarousel"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src={PinoGrafite} alt="Third slide" className="d-block w-90" id="imgCarousel"/>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Header;
