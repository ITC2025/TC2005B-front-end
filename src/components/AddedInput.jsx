import { Form, Row, Col, Button } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";

function AddedInput() {
  const DeleteLineIcon = <MdDeleteOutline />;
  const [ShowComponent, SetShowComponent] = useState(true);
  const DeleteLine = () => {
    SetShowComponent(false);
  };
  return (
    <>
      {ShowComponent ? (
        <Row id="SolicitFormRowNew">
          <Col sm={10} md={7}>
            <Form.Control type="text" placeholder="Concepto de Gasto" />
          </Col>
          <Col sm={10} md={3} id="IconButton">
            <Form.Control type="text" placeholder="Monto" />
            <Button>MXN</Button>
          </Col>
          <Col sm={10} md={1} id="IconButton">
            <Button onClick={DeleteLine}>{DeleteLineIcon}</Button>
          </Col>
        </Row>
      ) : (
        null
      )}
    </>
  );
}

export default AddedInput;
