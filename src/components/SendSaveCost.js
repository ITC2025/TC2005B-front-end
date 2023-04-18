import React, { useState } from 'react'
import SolicitarModal from './RequestModal'
import Button from 'react-bootstrap/Button';
import '../syles/SendSaveCost.css'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Footer() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Container>
      <Row>
        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
          <p className="total-gastos">
            TOTAL DE LOS GASTOS (MXN): $0.00
          </p>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
          <Button variant="primary" className="boton1" onClick={() => setModalShow(true)}>
            GUARDAR CAMBIOS
          </Button>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2} xl={2}>
          <Button className="boton1">
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