import React, { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

const AddInputButton = ({ onAddInput }) => {
  const sendValuesToParent = () => {
    onAddInput(values);
  };

  const [numRows, setNumRows] = useState(1);
  const [values, setValues] = useState([]);

  const handleAddRow = () => {
    setValues([...values, { concepto: "", monto: "" }]);
    setNumRows(numRows + 1);
  };

  return (
    <>
      <Button variant="success" onClick={handleAddRow}>
        Agregar fila
      </Button>
      <hr />

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
                  ),
                  sendValuesToParent()
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
    </>
  );
};

// Utilizar memo nos permite no renderizar un componente hijo
// cada que su componente padre lo es, esto permite reducir el uso de recursos
// del programa. Como funciona es que React.memo guarda la ultima copia creada
// del componente hijo, y al momento de actualizar al padre, deja al componente hijo con
// su mismo valor previo
export default React.memo(AddInputButton);
