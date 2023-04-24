// import { response } from "express";
import { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import gastos from './datos.json'  // archivo json


export default function Subtotal() {
    const [total, setTotal] = useState(0);

    // useEffect(() => {
    //     fetch('./datos.json')
    //         .then (response => response.json())
    //         .then (data => {
    //             const sumaTotal = data.reduce((i, gasto) => i + parseInt(gasto.total), 0);
    //             setTotal(sumaTotal);
    //         })
    //         .catch(error => console.error(error));
    // }, []);

    useEffect(() => {
        const sumaTotal = gastos.reduce((i, gasto) => i + parseInt(gasto.total), 0);
        setTotal(sumaTotal);
    }, [])

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
                                    <th> $ {total} </th>
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