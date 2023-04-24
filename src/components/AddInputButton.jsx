import { useState } from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";

const AddInputButton = () => {
  const [numRows, setNumRows] = useState(1);
  const [values, setValues] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddRow = () => {
    setValues([...values, { concepto: "", monto: "" }]);
    setNumRows(numRows + 1);
  };

  return (
    <>
      {values.map((value, idx) => (
        <Row key={idx}>
          <Col>
            <Form.Control
              placeholder="Concepto de gasto"
              value={value.concepto}
              onChange={(e) =>
                setValues(
                  values.map((v, i) =>
                    i === idx ? { ...v, concepto: e.target.value } : v
                  )
                )
              }
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Monto"
              value={value.monto}
              onChange={(e) =>
                setValues(
                  values.map((v, i) =>
                    i === idx ? { ...v, monto: e.target.value } : v
                  )
                )
              }
            />
          </Col>
          <Col>
            <Button
              variant="danger"
              onClick={() => setValues(values.filter((_, i) => i !== idx))}
            >
              Eliminar
            </Button>
          </Col>
        </Row>
      ))}
      <Button variant="success" onClick={handleAddRow}>
        Agregar fila
      </Button>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Mostrar modal
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Datos ingresados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {values.map((value, idx) => (
              <li key={idx}>
                <strong>Concepto:</strong> {value.concepto},{" "}
                <strong>Monto:</strong> {value.monto}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddInputButton;
