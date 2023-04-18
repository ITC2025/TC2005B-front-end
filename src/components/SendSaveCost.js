import React, { useState } from 'react'
import SolicitarModal from './RequestModal'
import Button from 'react-bootstrap/Button';
import '../styles/SendSaveCost.css'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Footer() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <p className="total-gastos">
            TOTAL DE LOS GASTOS (MXN): $0.00
          </p>
        </Col>
        <Col className="d-flex justify-content-end" sm={12} md={6}>
          <Button variant="primary" className="h-75 mx-1">
            GUARDAR CAMBIOS
          </Button>
          <Button variant="primary" className="h-75 mx-1" onClick={() => setModalShow(true)}>
            GUARDAR Y ENVIAR
          </Button>
        </Col>
      </Row>
    </Container>

      <SolicitarModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Footer;