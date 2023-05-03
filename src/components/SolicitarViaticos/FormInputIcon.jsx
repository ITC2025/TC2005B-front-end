import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function FormInputIcon(props) {
  return (
    <>
      <Container>
        <Row>
            <Form.Group controlId={props.inputControlID}>
              <Form.Label id="FormInputLabel">{props.inputLabel}</Form.Label>
              <Form.Control
                type={props.inputType}
                name={props.inputName}
                value={props.inputValue}
                onChange={props.onChange}
                required
              />
            </Form.Group>
        </Row>
      </Container>
    </>
  );
}

export default FormInputIcon;
