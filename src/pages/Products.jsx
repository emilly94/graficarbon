import React from "react";

import AnelGrafite from "../style/img/anelDeGrafite.png";
import EscovaCarvao from "../style/img/escovaDeCarvão_auto_x2.jpg";
import PalhetasGrafite from "../style/img/PalhetasDeGrafite_auto_x2.png";
import PlacaGrafite from "../style/img/PlacaDeGrafite_auto_x2.jpg";
import ContatosGrafite from "../style/img/ContatosDeGrafite_auto_x2.jpg";
import AnelBiTriPartido from "../style/img/AnelBipartidoTripartido.png";
import PinosGrafite from "../style/img/PinosDeGrafite_auto_x2.png";
import BuchasPinos from "../style/img/BuchasPinos.png";

import "../style/css/image.css";

const Products = ({ id }) => {
  return (
    <section id={id}>
      <div id="mainProdutos">
        <div className="produtosTexto" data-aos="fade-rigth">
          <h3>
            <strong>Produtos da Graficarbon</strong>
          </h3>
          <p>
            Fabricamos palhetas de grafite e celeron, buchas, anéis, tarugos e
            pinos de grafite, escovas de carvão e metalizadas entre outros.
          </p>
        </div>

        <div id="container" data-aos="fade-left">
          <div className="sombraAnel">
            <img src={AnelGrafite} alt="anelGrafite" id="imgAnel" />
          </div>
          <div className="sombraEscova">
            <img src={EscovaCarvao} alt="escovaCarvao" id="imgEscova" />
          </div>
          <div className="sombraPalhetas">
            <img src={PalhetasGrafite} alt="palhetasGrafite" id="imgPalhetas" />
          </div>
          <div className="sombraPlaca">
            <img src={PlacaGrafite} alt="placaGrafite" id="imgPlaca" />
          </div>
          <div className="sombraContato">
            <img src={ContatosGrafite} alt="contatoGrafite" id="imgContato" />
          </div>
          <div className="sombraAnelBiTri">
            <img src={AnelBiTriPartido} alt="anelBiTri" id="imgAnelBiTri" />
          </div>
          <div className="sombraPinos">
            <img src={PinosGrafite} alt="pinosGrafite" id="imgPinos" />
          </div>
          <div className="sombraBuchas">
            <img src={BuchasPinos} alt="buchasPinos" id="imgBuchas" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
