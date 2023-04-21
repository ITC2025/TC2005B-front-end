import '../../styles/gastosTabla.css'
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import Modal from "../modal";
import { useState } from "react";

function TableGastos() {
    const [estadoM, cambiarEstadoM] = useState(false);
    return (
        <>
            <Container>
                <Row>
                    <Col md={4} className="colGasto">
                        <div>
                            <Button variant="ligth">NUEVO GASTO</Button> {' '}
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
                        <th> Producto/Servicio </th>
                        <th> Tipo </th>
                        <th> Cantidad </th>
                        <th> Precio </th>
                        <th> Total </th>
                        <th> Moneda </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th> 01/2023 </th>
                        <th> 00-00-0000 </th>
                        <th> hamburger</th>
                        <th> Comida</th>
                        <th> 1</th>
                        <th> $2,000</th>
                        <th> $2,000</th>
                        <th> USD</th>
                        <th> </th>
                    </tr>
                </tbody>
            </Table>

            <Modal estado={estadoM}
                cambiarEstado={cambiarEstadoM}
                msg="Saldo Positivo"
                saldoPositivo={true}
                pagarButtons={true}>
            </Modal>
        </>
    );

    // function mostrarDatos() {

    // }
}

export default TableGastos;
