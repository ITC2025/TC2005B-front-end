import React, { useState } from "react";
import Formgastos from "../../components/Formgastos/index";
import AddedForm from "../../components/ButtonForm/index";
import {
    Col,
    Button,
    Row,
    Container,
    Card,
    FormFloating,
    Stack,
} from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";


import '../../styles/gastos.css';

export default function Gastos() {
    const [forms, setForms] = useState([<AddedForm key={0} />]);

    const addForm = () =>{
        const newForms = [...forms, <AddedForm key={forms.length} />];
        setForms(newForms);
    };

    return (
        <>
        <Container>
        <h2 id="gastos">Gastos</h2>
            <Row>
                <Col>
                    <Card id="container1">
                        <Container>
                                {forms}
                                <div className="d-flex justify-content-center">
                                    <Button variant="danger" id="button" onClick={addForm}>
                                        AGREGAR GASTO
                                    </Button>
                                </div>
                        </Container>
                    </Card>
                </Col>
            </Row>
        </Container>
        <div className="d-flex justify-content-end align-items-end">
            <Button variant="danger" id="CGbutton">CANCELAR</Button>
            <Button variant="danger" id="CGbutton">GUARDAR</Button>
        </div>
        </>
    );
}  

