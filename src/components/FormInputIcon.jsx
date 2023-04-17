import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../syles/FormInputIcon.css';


function FormInputIcon(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={4} md={8}>
                        <Form.Group controlId= {props.InputControlID}>
                            <Form.Label id="FormInputTitle">
                                {props.inputNombre}
                            </Form.Label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row id="InputAndIcon">
                    <Col sm={4} md={8} id="InputForm">
                        <Form.Control 
                            id="label" 
                            type= {props.inputType} 
                            placeholder= {props.inputInfo} />
                    </Col>
                    <Col sm={1} md={2} id="IconButton">
                        <Button>{props.inputIcon}</Button>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default FormInputIcon;