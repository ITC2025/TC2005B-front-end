import React from "react";
import {
    Col,
    Button,
    Row,
    Container,
    Card,
    Form,
    InputGroup,
} from "react-bootstrap";
import { MdCalendarMonth, MdLocationPin, MdExpandMore, MdOutlineFileUpload } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";

import '../../styles/gastos.css'

export default function Gastos() {
    return (
        <>
        <Col xxl={12}>
            <Card.Body id="container2">
                <div className="mb-2">
                    <div className="containerImage">
                    </div>
                    <div className="mt-3">
                        <Form>
                            <Form.Group className="m-3" controlId="formBasicUp">
                                <Row>
                                    <Col>
                                        <Form.Label className="text-center">
                                            Productos
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
                                            Tipo
                                        </Form.Label>

                                        <InputGroup className="mb-3">
                                            <Form.Select>
                                                <option>Estancia</option>
                                            </Form.Select>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <Form.Label className="text-center">
                                            Cantidad
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
                                            Monto
                                        </Form.Label>
                                        <InputGroup className="mb-3">

                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <InputGroup.Text id="basic-addon1">
                                                MXN
                                            </InputGroup.Text>

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
                                        <Form.Label>Ticker de factura</Form.Label>
                                        <InputGroup className="mb-3">

                                            <Form.Control
                                                type="text"
                                                required
                                            />
                                            <InputGroup.Text id="basic-addon2">
                                                <MdOutlineFileUpload />
                                                Upload
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <Form.Label>Fecha de Compra</Form.Label>
                                        <InputGroup className="mb-3">

                                            <Form.Control
                                                type="date"
                                                required
                                                placeholder="DD | MM | YYYY |"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                            </Form.Group>
                            
                        </Form>
                    </div>
                </div>
            </Card.Body>
            </Col>
        </>
    );
}  