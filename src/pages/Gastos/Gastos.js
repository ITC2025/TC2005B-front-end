import React, { useState } from "react";
import Gastos from "../../components/ButtonForm/index";
import {
    Col,
    Button,
    Row,
    Container,
    Card,
} from "react-bootstrap";

import { getFormData } from "../../utils/getApiData";


import '../../styles/gastos.css';




export default function Facturas() {
    const [newGastos, setNewGastos] = useState([]);

    const handleNewGastos = (gastos) => {
        setNewGastos(gastos);
    }

    const saveForm = () => {/*Esta funcion sirve para guardar la informacion del form */
        for (let i = 0; i < newGastos.length; i++) {
            getFormData(
                newGastos[i].producto,
                newGastos[i].tipo,
                newGastos[i].monto,
                newGastos[i].imagen,
                newGastos[i].xml,
                newGastos[i].fecha
            );
        }
    }

    return (
        <>
            <Container>
                <h2 id="gastos">Gastos</h2>
                <hr></hr>
                <Row>
                    <Col>
                        <Card id="container1">
                            <Container>
                                <Gastos onAddInput={handleNewGastos} />
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-end align-items-end" id = "BotonesSC">
                <Button variant = "danger" controlId="CGbutton" id="botonC1">CANCELAR</Button>{/*Este boton sirve para usar la funcion deleteForms*/}
                <Button variant = "danger" type="submit" onSubmit={saveForm} id="botonG1">GUARDAR</Button>
                {/*Este boton sirve para usar la funcion saveForm*/}
            </div>
        </>
    );
}