import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import ColDireccion from "./colDireccion";
import ColInfoProyecto from "./colInfoProyecto";
import {TableGastos} from "./tableGastos";
import Subtotal from "./subtotal";

const GastosTabla = () => {
    return (
        <>
            <Container>
                <Section>
                    <Row>
                        <ColDireccion></ColDireccion>
                        <ColInfoProyecto></ColInfoProyecto>
                    </Row>
                </Section>
                <TableGastos></TableGastos>
                <Subtotal></Subtotal>
            </Container>
        </>
    );
}

export default GastosTabla;

const Section = styled.div`
    padding-top: 5em;
    background: #FAFAFA;
`;