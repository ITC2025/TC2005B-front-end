import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function FormInputIcon(props) {
  return (
    <>
      <Container>
        <Row>
          <Col sm={5} md={10}>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FormInputIcon;