import { Modal, Button, Container, Row, Col, Table } from "react-bootstrap";
import "../../styles/RequestModal.css";

function RequestModal(props) {
  return (
    <Modal show={props.showModal} onHide={props.handleClose} size="xl">
      <Modal.Header>
        <Modal.Title className="title-modal">
          CONFIRMACIÓN DE SOLICITUD
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="white-bg">
          <Container className="gray-bg" id="modalTable">
            <Container>
              <Row>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>Solicitante: </p>
                  <p>
                    Monto Total: <strong>${props.totalGastos}</strong>
                  </p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>
                    Destino: <strong>{props.formData.destino}</strong>
                  </p>
                  <p>
                    Proyecto: <strong>{props.formData.proyecto}</strong>
                  </p>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                  <p>
                    Fecha de inicio:{" "}
                    <strong>{props.formData.fechaInicio}</strong>
                  </p>
                  <p>
                    Fecha de termino:{" "}
                    <strong>{props.formData.fechaTermino}</strong>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Table bordered hover className="custom-table">
                    <thead className="modal-thead">
                      <tr>
                        <td>Concepto de gasto</td>
                        <td>Monto</td>
                      </tr>
                    </thead>
                    <tbody className="modal-tbody">
                      {props.gastosValues.map((value, idx) => (
                        <tr key={idx} className="bg-white">
                          <td>{value.concepto}</td>
                          <td>{parseInt(value.monto)} MXN</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </Container>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleModal}>
          Enviar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RequestModal;
