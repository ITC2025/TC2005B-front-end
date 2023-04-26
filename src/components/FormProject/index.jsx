import React from "react";
import {
    Col,
    Row,
    Button,
    Container,
    Form,
    InputGroup,
} from "react-bootstrap";
import { MdCalendarMonth, MdLocationPin, MdExpandMore, MdOutlineFileUpload } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import '../../styles/formProject.css'

export default function FormProject({PmData}) {
    return (
        <>
            <Container className="d-flex justify-content-start">
                <h3>Nuevo Proyecto</h3>
            </Container>
            <Container className="justify-content-center">
                <hr />
                <Form>
                    <Form.Group className="m-3" controlId="formBasicUp">
                        <Row>
                            <Col>
                                <Form.Label className="text-center">
                                    Nombre
                                </Form.Label>

                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        required
                                    />

                                </InputGroup>

                            </Col>
                            <Col>
                                <Form.Label className="text-left">
                                    Código
                                </Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Label className="text-center">
                                    Responsable
                                </Form.Label>

                                <InputGroup className="mb-3">
                                    <Form.Select>
                                        {PmData.map(pm => (
                                            <option>{pm.name} {pm.apellido}</option>
                                        ))
                                        }

                                    </Form.Select>
                                </InputGroup>
                            </Col>

                        </Row>
                    </Form.Group>

                    <Form.Group
                        className="m-3"
                        controlId="formBasicDown"
                        id="group2"
                    >
                        <Row>
                            <Col>
                                <Form.Label>Descripcion</Form.Label>
                                <textarea class="form-control" id="exampleFormControlTextarea2" rows="6" required></textarea>
                            </Col>
                        </Row>
                    </Form.Group>

                </Form>

            </Container>
            <Container className="fixed-bottom">
                <hr />
            </Container>
        </>
    );
}  