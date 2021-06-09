import React from "react";

import "../assets/css/dashboard.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsBellFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { BsFillEnvelopeFill } from "react-icons/bs";

import Footer from '../components/Footer';
import Maps from "../components/Maps";

const Contacts = () =>{
  return (
    <div>
    <section>
      <div id="contatos">
        <h1>
          <BsBellFill />
          Duvidas? Entre em Contato
        </h1>
        <Container>
          <Row md={4}>
            <Col>
              <Button id="button-locale" variant="dark">
                <ImLocation2 size={50} />
              </Button>
              <h4>Endereço</h4>
              <h5>
                R. Manoel de Teffé, 405A - Jd. Satelite
              </h5>
            </Col>
            <Col>
              <Button variant="dark" id="button-whatsapp">
                <FaWhatsapp size={50} />
              </Button>
              <h4>Whatsapp</h4>
              <h5>(11)99745-4459</h5>
            </Col>
            <Col>
              <Button variant="dark" id="button-fixo">
                <FiPhoneCall size={50} />
              </Button>
              <h4>Fixo</h4>
              <h5>
                (11)5667-2700<br></br>(11)5665-8687
              </h5>
            </Col>
            <Col>
              <Button variant="dark" id="button-email">
                <BsFillEnvelopeFill size={50} />
              </Button>
              <h4>E-mail</h4>
              <h5>graficarbon@graficar.com.br</h5>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    <Maps/>
    <br></br>
    <Footer/>
    </div>
  );
};

export default Contacts;
