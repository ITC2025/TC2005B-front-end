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
            <h2 id="gastos">Gastos</h2>
            <div className="animated-background">
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={4} xs={12}>
                            <Card id="container1">
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
                                                    <Form.Label>Fecha de Compra</Form.Label>
                                                    <InputGroup className="mb-3">

                                                        <Form.Control
                                                            type="date"
                                                            required
                                                            placeholder="DD | MM | YYYY |"
                                                        />
                                                    </InputGroup>
                                                </Form.Group>
                                                <div className="d-grid mt-4">
                                                    <Button variant="danger" type="submit" id="button">
                                                        <BiMoney />
                                                        AGREGAR GASTO
                                                        <HiPlus />
                                                    </Button>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        </>
    );
}  