import React from "react";
import { Carousel } from "react-bootstrap";
import "../style/css/style.css";

import Fabricacao from "../style/img/pessoasFabrica.jpg";
import EntregaProdutos from "../style/img/entregaProdutoFabrica.jpg";

import { FaBoxOpen, FaCity } from "react-icons/fa";

const Header = () => {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img
            src={Fabricacao}
            alt="First slide"
            className="d-block w-90"
            id="imgCarouselFabricacao"
          />
          <Carousel.Caption>
            <h3><strong><FaCity/> Fabrica</strong></h3>
            <p>Contamos com profissionais altamente <span>qualificado para realização da</span><span>peça de sua escolha.</span></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={EntregaProdutos}
            alt="Second slide"
            className="d-block w-90"
            id="imgCarousel"
          />
          <Carousel.Caption>
            <h3><strong><FaBoxOpen/>Entrega</strong></h3>
            <p>Nossa entrega é feita por transportadora<span>de sua preferencia o prazo varia de </span><span>acordo com a qualidade da peça.</span></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Header;
