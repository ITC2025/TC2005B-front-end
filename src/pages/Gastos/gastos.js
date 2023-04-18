import React from "react";
import Formgastos from "../../components/Formgastos/index";
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


import '../../styles/gastos.css';

export default function Gastos() {
    return (
        <>
        <h2 id="gastos">Gastos</h2>
        <Container>
            <Row className="vh-100 align-items-center">
                <Col>
                    <Card id="container1">

                        <Formgastos />

                        <div className="d-grid mt-4">
                            <Button variant="danger" type="submit" id="button">
                                <BiMoney />
                                AGREGAR GASTO
                                <HiPlus />
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    );
}  
