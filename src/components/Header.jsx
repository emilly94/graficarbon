import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap/";
import Image from "react-bootstrap/Image";
import Logo from "../assets/img/logo.png";

const Hearder = () => {
  return (
    <Container>
      <Navbar  variant="light" bg="light">
        <Navbar.Brand href="#">
          <Image width={300} src={Logo} fluid />
        </Navbar.Brand>
        <Row>
          <Col md={{ span: 8, offset: 6 }}>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/contacts">Contato</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
};

export default Hearder;
