import { Container, Row } from "react-bootstrap";
import  ColInfoProyecto  from "../../components/Gastos/colInfoProyecto";
import styled from "styled-components";
import ColDireccion from "../../components/Gastos/colDireccion";
import Subtotal from "../../components/Gastos/subtotal";
import GastosTabla from "../../components/Gastos";

export default function Expediente  () {
    return (
        <GastosTabla></GastosTabla>
    );
}

const Section = styled.div`
    padding-top: 5em;
    background: #FAFAFA;
`;