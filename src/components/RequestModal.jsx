import { Modal, Button } from 'react-bootstrap';

function RequestModal(props) {
  return (
    <Modal show={props.showModal} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Datos del formulario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Fecha de inicio: {props.formData.fechaInicio}</p>
        <p>Fecha de Termino: {props.formData.fechaTermino}</p>
        <p>Destino: {props.formData.destino}</p>
        <p>Proyecto: {props.formData.proyecto}</p>
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