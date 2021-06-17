import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { BsBell } from "react-icons/bs";

import "../style/css/style.css";
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const Footer = ({id}) => {
  return (
    <section id={id}>
        <h1>
          <BsBell />
          Dúvidas? Entre em contato!
        </h1>
        <Container>
          <Row md={4} lg={15}>
            <Col xs={3}>
              <h3>
                <GoLocation />
              </h3>
              <p>
                R. Manoel de Teffé, 405A - Jd. Satelite<br></br>
                CEP 04815300 <br></br> São Paulo, SP
              </p>
            </Col>
            <Col xs={3}>
              <h3>
                <FaWhatsapp />
              </h3>
              <p>(11)99745-4459</p>
            </Col>
            <Col>
              <h3>
                <FiPhoneCall />
              </h3>
              <p>
                (11)5667-2700<br></br>(11)5665-8687
              </p>
            </Col>
            <Col>
              <h3>
                <BsFillEnvelopeFill />
              </h3>
              <p>graficarbon@graficar.com.br</p>
            </Col>
          </Row>
        </Container>
      <p id="copyright">COPYRIGHT 2008-2021 GRAFICARBON - TODOS OS DIREITOS RESERVADOS</p>
    </section>
  );
};

export default Footer;
