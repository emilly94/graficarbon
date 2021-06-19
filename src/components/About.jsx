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
            A Graficarbon vem atuando no mercado de <span>carvão e grafite desde 2008,
            dirigida por</span> profissionais experientes com mais de 20 anos <span>de
            carreira no ramo.</span>
            <br></br>
            Somos uma empresa especializada, contando<span> com um quadro de
            funcionários competentes</span><span>e capacitados na fabricação das peças.</span>
            <br></br>
            Garantimos total qualidade, agilidade e um <span>otimo atendimento na pré
            e pós venda.</span>
          </p>
        </div>
    </section>
  );
};

export default About;
