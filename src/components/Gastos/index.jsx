import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import ColDireccion from "./colDireccion";
import ColInfoProyecto from "./colInfoProyecto";
import TableGastos from "./tableGastos";
import Subtotal from "./subtotal";

const PantallaGastos = () => {
    return (
        <>
            <Container >
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

export default PantallaGastos;

const Section = styled.div`
    padding-top: 5em;
    background: #FAFAFA;

    img {
        width: 150px;
        height: 150px;
        margin-left: 1em;
    }

    .colDireccion {
        text-align: left;
        padding-top: 5px;
    }

    .colDatos {
        text-align: right;
    }

    .colDatos div {
        display: flex;
        justify-content: end;
    }

    .idProyecto {
        padding-top: 1em;
        padding-bottom: 1em;
        font-weight: bold;
        font-size: 16px;
    }

    .anticipoProyecto {
        border: solid 1px;
        border-radius: 5px;
        color: rgba(253, 125, 125);
        font-weight: bold;
        padding-top: 7px;
        padding-bottom: 4px;
        padding-right: 3em;
    }
   
`;