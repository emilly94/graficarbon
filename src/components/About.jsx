import React from "react";
import { Image } from 'react-bootstrap';
import Logo from "../style/img/logo.png";

import "../style/css/style.css";

const About = ({id}) => {

  return (
    <section id={id}>
        <div id="mainSobreEmpresa" data-aos="fade-right">
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
  );
};

export default About;
