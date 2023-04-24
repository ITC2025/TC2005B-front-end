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
import { getFormData } from "../../utils/getApiData";


import '../../styles/gastos.css';

export default function Facturas() {
    const [forms, setForms] = useState([<AddedForm key={0} />]);

    const addForm = () =>    {/*Esta funcion sirve agregar Forms*/
        const newForms = [...forms, <AddedForm key={forms.length} />];
        setForms(newForms);
    };


    const deleteForms = () => {/*Esta funcion sirve para eliminar todos los Forms*/
        setForms([<AddedForm key={0} />]);
    };

    const saveForm=()=>{/*Esta funcion sirve para guardar la informacion del form */
        getFormData(localStorage.getItem('producto'), localStorage.getItem('type'), localStorage.getItem('amount'), localStorage.getItem('image'), localStorage.getItem('date'))
        localStorage.clear()
    }

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
                                        AGREGAR GASTO{/*Este boton sirve para usar la funcion addForm*/}
                                        <HiPlus />
                                    </Button>
                                </div>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="d-flex justify-content-end align-items-end">
                <Button variant="danger" id="CGbutton" onClick={deleteForms}>CANCELAR</Button>{/*Este boton sirve para usar la funcion deleteForms*/}
                <Button variant="danger" id="CGbutton" onClick={saveForm}>GUARDAR</Button>{/*Este boton sirve para usar la funcion saveForm*/}
            </div>
        </>
    );
}