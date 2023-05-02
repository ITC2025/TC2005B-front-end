// import { response } from "express";
import { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { proyecto_sum, proyecto_info } from "../../apis/gastosApiTabla";


export default function Subtotal() {
    
    const [suma, setSuma] = useState(0.0);
    const [anticipo, setAnticipo] =useState(0.0);

    const loadData = async () => {
        const jsonInfo = await proyecto_sum(1);
        console.log(jsonInfo);

        setSuma(jsonInfo.monto)
        
    }

    const loadData2 = async () => {
        const jsonInfo = await proyecto_info(1);
        console.log(jsonInfo);
        
        setAnticipo(jsonInfo[0].anticipo)
    }

    useEffect(() => {
        loadData();
        loadData2();
    })

   

    let total = anticipo - suma;

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}></Col>
                    <Column>
                        <Table borderless size="sm">
                            <tbody>
                                <tr>
                                    <th> TOTAL (MXN): </th>
                                    <th> $ {suma} </th>
                                </tr>
                                <tr>
                                    <th> ANTICIPO (MXN): </th>
                                    <th> $ {anticipo} </th>
                                </tr>

                                <tr className="rowSaldo">
                                    <th> SALDO (MXN): </th>
                                    <th> $ {total} </th>
                                </tr>
                            </tbody>
                        </Table>
                    </Column>
                </Row>
            </Container>
        </>
    );
}

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