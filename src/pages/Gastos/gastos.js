import React, { useState } from "react";
import AddedForm from "../../components/ButtonForm/index";
import {
    Col,
    Button,
    Row,
    Container,
    Card,
} from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import {gastosApi} from '../../utils/gastosApidata'


import '../../styles/gastos.css';

export default function Facturas() {
    const data = gastosApi("1");
    console.log(data);
    const [forms, setForms] = useState([<AddedForm key={0} />]);

    const addForm = () => {
        const newForms = [...forms, <AddedForm key={forms.length} />];
        setForms(newForms);
    };

    const deleteForm = () => {
        setForms([<AddedForm key={0} />]);
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
                                        <BiMoney />
                                        AGREGAR GASTO
                                        <HiPlus />
                                    </Button>
                                </div>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-end align-items-end">
                <Button variant="danger" id="CGbutton" onClick={deleteForm}>CANCELAR</Button>
                <Button variant="danger" id="CGbutton">GUARDAR</Button>
            </div>
        </>
    );
}

