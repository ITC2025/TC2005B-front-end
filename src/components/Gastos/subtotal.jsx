import { Container, Table, Row, Col } from "react-bootstrap";
import styled from "styled-components";

function Subtotal() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}></Col>
                    <Column>
                        <Table borderless size="sm">
                            <tbody>
                                <tr>
                                    <th> SUBTOTAL (MXN): </th>
                                    <th> $ -----</th>
                                </tr>
                                <tr>
                                    <th>SUBTOTAL (USD): </th>
                                    <th> $ ------</th>
                                </tr>
                                <tr>
                                    <th> CAMBIO ($19.00 MXN): </th>
                                    <th> $ ------</th>
                                </tr>
                                <tr className="border-top">
                                    <th> TOTAL (MXN): </th>
                                    <th> $ -------</th>
                                </tr>
                                <tr>
                                    <th> ANTICIPO (MXN): </th>
                                    <th> $ -------</th>
                                </tr>

                                <tr className="rowSaldo">
                                    <th> SALDO (MXN): </th>
                                    <th> $ -------</th>
                                </tr>
                            </tbody>
                        </Table>
                    </Column>
                </Row>
            </Container>
        </>
    );
}
export default Subtotal;

const Column = styled.div`
    width: 35%;

    th {
        text-align: left;
        padding-left: 2em;
    }

    .rowSaldo {
        border: solid 1px;
        border-radius: 5px;
        color: rgba(253, 125, 125);
    }
`;