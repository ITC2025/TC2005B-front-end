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
                        <th> Tipo </th>
                        <th> Concepto (Producto/Servicio) </th>
                        <th> Total </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th> 01/2023 </th>
                        <th> 00-00-0000 </th>
                        <th> Comida</th>
                        <th> Hamburguesa</th>
                        <th> Total</th>
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
