import { Container, Row } from "react-bootstrap";
import  ColInfoProyecto  from "../../components/Gastos/colInfoProyecto";
import styled from "styled-components";
import ColDireccion from "../../components/Gastos/colDireccion";
import Subtotal from "../../components/Gastos/subtotal";

export default function Expediente  () {
    return (
        <>
            <Container>

                <Section>
                    <Row>
                        <ColDireccion />
                        <ColInfoProyecto />
                    </Row>

                </Section>

                <div>
                    <strong>
                        TABLA
                    </strong>
                </div>
                
                {/* <Row>
                    <Col md={4} className="colGasto">
                        <div>
                            <Button href='/user/facturas' variant="ligth" >NUEVO GASTO</Button> {' '}

                        </div>
                    </Col>
                    <Col md={8} className="colEnviar">
                        <div className='pe-3'>
                            <Button variant="ligth"> EXPORTAR EXCEL </Button> {' '}
                            <Button onClick={() => cambiarEstadoM(!estadoM)} variant="ligth"> ACEPTAR </Button> {' '}
                            <Button onClick={() => cambiarEstadoM(!estadoM)} variant="ligth"> RECHAZAR </Button>
                        </div>
                    </Col>
                </Row> */}

                <Subtotal />
            </Container>
        </>
    );
}

const Section = styled.div`
    padding-top: 5em;
    background: #FAFAFA;
`;