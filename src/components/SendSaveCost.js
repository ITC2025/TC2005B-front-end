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
        <Col xs={12} sm={12} md={12} lg={8} xl={8}>
          <Col xs={12} sm={12} md={9} lg={7} xl={5}>
            <p className="total-gastos">
              TOTAL DE LOS GASTOS (MXN): $0.00
            </p>
          </Col>
        </Col>
        <Col xs={6} sm={6} md={6} lg={2} xl={2}>
          <Button className="boton1">
            GUARDAR CAMBIOS
          </Button>
        </Col>
        <Col xs={6} sm={6} md={6} lg={2} xl={2}>
          <Button variant="primary" className="boton1" onClick={() => setModalShow(true)}>
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