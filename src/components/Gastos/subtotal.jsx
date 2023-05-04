// import { response } from "express";
import { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { proyecto_sum_user, proyecto_sum_pm, proyecto_sum_admin, proyecto_info } from "../../apis/gastosApiTabla";
import { useLocation } from "react-router-dom";

export default function Subtotal({id,reloadTrigger}) {

    const location = useLocation();
     
    const [suma, setSuma] = useState(0.0);
    const [anticipo, setAnticipo] =useState(0.0);



    const loadData2 = async () => {
        const jsonInfo = await proyecto_info(id);
        console.log(jsonInfo);
        
        setAnticipo(jsonInfo[0].anticipo)
    }


    useEffect(() => {
        if (location.pathname === "/user/expediente/" + id || location.pathname === "/pm/hexpediente/" + id || location.pathname === "/admin/hexpediente/" + id) {
            const loadData = async () => {
                const jsonInfo = await proyecto_sum_user(id);
                console.log(jsonInfo);
        
                setSuma(jsonInfo.monto)
                
            }
            loadData();
        }
        else if (location.pathname === "/pm/expediente/" + id) {
            const loadData = async () => {
                const jsonInfo = await proyecto_sum_pm(id);
                console.log(jsonInfo);
        
                setSuma(jsonInfo.monto)
                
            }
            loadData();
        }
        else if (location.pathname === "/admin/expediente/" + id) {
            const loadData = async () => {
                const jsonInfo = await proyecto_sum_admin(id);
                console.log(jsonInfo);
        
                setSuma(jsonInfo.monto)
                
            }
            loadData();
        }
        
        loadData2();
    }, [reloadTrigger])

    let total = anticipo - suma


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