import React from "react";

import AnelGrafite from "../assets/img/anelDeGrafite.png";
import EscovaCarvao from "../assets/img/escovaDeCarvão_auto_x2.jpg";
import PalhetasGrafite from "../assets/img/PalhetasDeGrafite_auto_x2.png";
import PlacaGrafite from "../assets/img/PlacaDeGrafite_auto_x2.jpg";
import ContatosGrafite from "../assets/img/ContatosDeGrafite_auto_x2.jpg";
import AnelBiTriPartido from "../assets/img/AnelBipartidoTripartido.png";
import PinosGrafite from "../assets/img/PinosDeGrafite_auto_x2.png";
import BuchasPinos from "../assets/img/BuchasPinos.png";

import "../assets/css/image.css";

const Products = () => {
  return (
    <div id="content">
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
  );
};

export default Products;
