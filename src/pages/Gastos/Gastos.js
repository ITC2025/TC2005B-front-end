import React, { useState } from "react";
import Gastos from "../../components/ButtonForm/index";
import {Container} from "react-bootstrap";


import '../../styles/gastos.css';

export default function Facturas({id}) {
    const [newGastos, setNewGastos] = useState([]);

    const handleNewGastos = (gastos) => {
        setNewGastos(gastos);
    };

    return (
        <>
            <Container>
                <h2 id="gastos">Gastos</h2>
                <hr></hr>

                <Gastos viaticoID={id} onAddInput={handleNewGastos}  />
            </Container>

        </>
    );
}