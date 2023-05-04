import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import ColDireccion from "./colDireccion";
import ColInfoProyecto from "./colInfoProyecto";
import {TableGastos} from "./tableGastos";
import Subtotal from "./subtotal";
import { useState } from "react";

const GastosTabla = ({viaticoID}) => {

    const [reloadTrigger,setReloadTrigger] = useState(0);

    const handleReload = () => {
        setReloadTrigger(reloadTrigger + 1)
    }

    return (
        <>
            <Container>
                <Section>
                    <Row>
                        <ColDireccion></ColDireccion>
                        <ColInfoProyecto id={viaticoID} ></ColInfoProyecto>
                    </Row>
                </Section>
                <TableGastos id={viaticoID} handleReloadSubtotal={handleReload}></TableGastos>
                <Subtotal id={viaticoID} reloadTrigger={reloadTrigger}></Subtotal>
            </Container>
        </>
    );
}

export default GastosTabla;

const Section = styled.div`
    padding-top: 5em;
    background: #FAFAFA;
`;