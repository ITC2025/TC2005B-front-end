import '../../styles/gastosTabla.css'
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import Modal from "../modal";
import { useState } from "react";
import { gastosApi } from "../../utils/gastosApiTabla";

export default function TableGastos() {
    const [estadoM, cambiarEstadoM] = useState(false);
    const data = gastosApi("1");


    console.log(typeof data);

    
    
    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className="colGasto">
                        <div>
                            <Button href='/user/facturas' variant="ligth" >NUEVO GASTO</Button> {' '}
                        </div>
                    </Col>

                    <Col md={8} className="colEnviar">
                        <div className='pe-3'>
                            <Button variant="ligth">GUARDAR</Button> {' '}
                            <Button onClick={() => cambiarEstadoM(!estadoM)} variant="ligth"> CERRAR Y ENVIAR</Button> {' '}
                            <Button variant="ligth">EXPORTAR EXCEL</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Table responsive>
                <thead className="pt-5">
                    <tr>
                        <th> N° Reporte </th>
                        <th> Fecha </th>
                        <th> Tipo </th>
                        <th> Concepto (Producto/Servicio) </th>
                        <th> Total </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(gasto => (
                        <tr key={gasto.id}>
                            <td> {gasto.fecha} </td>
                            <td> {gasto.tipo} </td>
                            <td> {gasto.concepto} </td>
                            <td> {gasto.total} </td>
                            <td>  </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal estado={estadoM}
                cambiarEstado={cambiarEstadoM}
                saldoNegativo={true}>
            </Modal>
        </>
    );
}




