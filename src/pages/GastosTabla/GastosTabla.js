import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import ColDireccion from "../../components/Gastos/colDireccion";
import ColInfoProyecto from "../../components/Gastos/colInfoProyecto";
import TableGastos from "../../components/Gastos/tableGastos";
import Subtotal from "../../components/Gastos/subtotal";

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