import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/FormInputIcon.css';


function FormInputIcon(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={5} md={10}>
                        <Form.Group controlId= {props.InputControlID}>
                            <Form.Label id="FormInputTitle">
                                {props.inputNombre}
                            </Form.Label>
                        </Form.Group>
                    </Col>
                </Row>
                <Row id="InputAndIcon">
                    <Col sm={5} md={10} id="InputForm">
                        <Form.Control 
                            id="label" 
                            type= {props.inputType} 
                            placeholder= {props.inputInfo} />
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default FormInputIcon;