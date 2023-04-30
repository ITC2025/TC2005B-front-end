import React, { useState } from "react";
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap";
import { MdAdd, MdCreditCard, MdDelete } from "react-icons/md";
import '../../styles/AddInputButton.css';

const AddInputButton = ({ onAddInput }) => {
  const add = <MdAdd />;
  const card = <MdCreditCard />;
  const trash = <MdDelete />;

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
      <Button variant="primary" onClick={handleAddRow}>
        {card}AGREGAR GASTOS{add}
      </Button>

      {values.map((value, idx) => (
        <Row key={idx} id="NewSolicitFormRow">
          <Col md={7}>
            <InputGroup>
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
                required
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <InputGroup>
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
                onBlur={sendValuesToParent()}
                required
              />
              <InputGroup.Text id="basic-addon1">MXN</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col md={1} id="IconButton">
            <Button 
              onClick={() => setValues(values.filter((_, i) => i !== idx))}>
              {trash}
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
