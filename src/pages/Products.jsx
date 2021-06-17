import React from "react";

import AnelGrafite from "../style/img/anelDeGrafite_auto_x2.png";
import EscovaCarvao from "../style/img/escovaDeCarvão_auto_x2.png";
import PalhetasGrafite from "../style/img/PalhetasDeGrafite_auto_x2.png";
import PlacaGrafite from "../style/img/PlacaDeGrafite_auto_x2.png";
import ContatosGrafite from "../style/img/ContatosDeGrafite_auto_x2.png";
import AnelBiTriPartido from "../style/img/AnelBipartidoTripartido_auto_x2.png";
import PinosGrafite from "../style/img/PinosDeGrafite_auto_x2.png";
import BuchasPinos from "../style/img/BuchasPinos_auto_x2.png";

import "../style/css/image.css";
import {Card} from 'react-bootstrap';

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
      </div>
        <div id="container" data-aos="fade-left">
          <div className="sombraAnel">
            <Card>  
            <img src={AnelGrafite} alt="anelGrafite" id="imgAnel" />
            </Card>
          </div>
          <div className="sombraEscova">
            <Card>
            <img src={EscovaCarvao} alt="escovaCarvao" id="imgEscova" />
            </Card>
          </div>
          <div className="sombraPalhetas">
            <Card>
            <img src={PalhetasGrafite} alt="palhetasGrafite" id="imgPalhetas" />
            </Card>
          </div>
          <div className="sombraPlaca">
            <Card>
            <img src={PlacaGrafite} alt="placaGrafite" id="imgPlaca" />
            </Card>
          </div>
          <div className="sombraContato">
            <Card>
            <img src={ContatosGrafite} alt="contatoGrafite" id="imgContato" />
            </Card>
          </div>
          <div className="sombraAnelBiTri">
            <Card>
            <img src={AnelBiTriPartido} alt="anelBiTri" id="imgAnelBiTri" />
            </Card>
          </div>
          <div className="sombraPinos">
            <Card>
              <img src={PinosGrafite} alt="pinosGrafite" id="imgPinos" />
            </Card>
          </div>
          <div className="sombraBuchas">
            <Card>
            <img src={BuchasPinos} alt="buchasPinos" id="imgBuchas" />
            </Card>
          </div>
        </div>
    </section>
  );
};

export default Products;
