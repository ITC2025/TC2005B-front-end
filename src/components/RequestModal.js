import React from 'react'
import '../styles/RequestModal.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function SolicitarModal(props) {
  return (
    <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
        keyboard={false}
    >
      <Modal.Header closeButton className='modal-header'>
        <Modal.Title id="contained-modal-title-vcenter" className='title-modal'>
            <strong>CONFIRMACIÓN DE SOLICITUD</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className='white-bg'>
            <Container className='gray-bg'>
                <Row>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <p>Solicitante: <strong>Luis Shaefer</strong></p>
                        <p>Proyecto: <strong>Supervision de planta</strong></p>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <p>Proyecto: <strong>Supervision de planta</strong></p>
                        <p>Destino: <strong>Hermosillo, SON, MEX</strong></p>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                        <p>Fecha de inicio: <strong>01/01/2023</strong></p>
                        <p>Fecha de termino: <strong>03/02/2023</strong></p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Table bordered hover className="custom-table">
                            <thead className='modal-thead'>
                                <tr>
                                <td>Concepto de gasto</td>
                                <td>Monto</td>
                                </tr>
                            </thead>
                            <tbody className='modal-tbody'>
                                <tr className="bg-white">
                                <td>Boleto de avión redondo</td>
                                <td>2,000 MXN</td>
                                </tr>

                                <tr className="bg-white">
                                <td>Hotel</td>
                                <td>30,000 MXN</td>
                                </tr>

                                <tr className="bg-white">
                                <td>Comida</td>
                                <td>15,000 MXN</td>
                                </tr>

                                <tr className="bg-white">
                                <td>Renta de carro</td>
                                <td>25,000 MXN</td>
                                </tr>

                                <tr className="bg-white">
                                <td>Gasolina</td>
                                <td>40,000 MXN</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className='close-button' onClick={props.onHide}>REALIZAR CAMBIOS</Button>
        <Button className='close-button' onClick={props.onHide}>GUARDAR Y ENVIAR</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SolicitarModal;