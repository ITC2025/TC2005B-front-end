import React, { useState } from 'react'
import SolicitarModal from './RequestModal'
import Button from 'react-bootstrap/Button';
import '../styles/SendSaveCost.css'
import { Container, Row, Col } from 'react-bootstrap';

function SendSaveCost(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <p className="mt-0" id="TotalExpenses">
            TOTAL DE LOS GASTOS (MXN):
          </p>

        </Col>
        <Col id="SaveSendColumns" sm={12} md={6}>
          <Button id="SendSaveButtons" variant="primary">
            GUARDAR CAMBIOS
          </Button>
          <Button id="SendSaveButtons" variant="primary" onClick={() => setModalShow(true)}>
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

export default SendSaveCost;