import React from "react";
import { Image } from 'react-bootstrap';
import Logo from "../assets/img/logo.png";
import Products from "../pages/Products";

import "../assets/css/dashboard.css";

const Main = () => {
  return (
    <section>
      <section>
        <div id="mainSobreEmpresa">
          <Image id="imgSobreEmpresa" src={Logo} />
          <p>
            A Graficarbon vem atuando no mercado de carvão e grafite desde 2008,
            dirigida porprofissionais experientes com mais de 20 anos de
            carreira no ramo.
            <br></br>
            <br></br>
            Somos uma empresa especializada, contando com um quadro de
            funcionários competentes e capacitados na fabricação das peças.
            <br></br>
            <br></br>
            Garantimos total qualidade, agilidade e um otimo atendimento na pré
            e pós venda.
          </p>
        </div>
      </section>
      <br></br>
      <section>
        <div id="mainProdutos">
            <h3><strong>Produtos da Graficarbon</strong></h3>
          <p>
            Fabricamos palhetas de grafite e celeron, buchas, anéis,
            tarugos e pinos de grafite, escovas de carvão e metalizadas entre
            outros.
          </p>
          <Products />
        </div>
      </section>
    </section>
  );
};

export default Main;
