import React, { useState } from "react";
import EditGastos from "../../components/EditGastos/index";
import {Container} from "react-bootstrap";


import '../../styles/gastos.css';

export default function EditarGasto({id}) {
    return (
        <>
            <Container>
                <h2 id="gastos">Editar Gastos</h2>
                <hr></hr>

                <EditGastos viaticoID ={id}  />
            </Container>

        </>
    );
}