import { Modal, Button, Container, Row, Col, Table } from 'react-bootstrap';
import '../styles/RequestModal.css';

function RequestModal(props) {
  return (
    <Modal 
      show={props.showModal} 
      onHide={props.handleClose}
      size="xl"
      >
      <Modal.Header closeButton>
        <Modal.Title className='title-modal'>CONFIRMACIÓN DE SOLICITUD</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className='white-bg'>
          <Container className='gray-bg'>
            <Container>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>Solicitante: {props.formData.destino}</p>
                  <p>Proyecto: {props.formData.proyecto}</p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>Destino: {props.formData.destino}</p>
                  <p>Proyecto: {props.formData.proyecto}</p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>Fecha de inicio: {props.formData.fechaInicio}</p>
                  <p>Fecha de termino: {props.formData.fechaTermino}</p>
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
        </Container>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RequestModal;