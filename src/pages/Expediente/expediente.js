import styled from "styled-components";
import GastosTabla from "../../components/Gastos";

export default function Expediente({id}) {
    return (
        <GastosTabla viaticoID={id}></ GastosTabla>
    );
}

const Section = styled.div`
    padding-top: 5em;
    background: #FAFAFA;
`;