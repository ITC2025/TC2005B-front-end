import styled from "styled-components";
//import '../../styles/gastosTabla.css'
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import Modal from "../modal";
import { useState } from "react";



function Tabla({columnas, datos}) {
    const [estadoM, cambiarEstadoM] = useState(false)

    console.log(columnas);
    console.log(datos);
    
    

    return (
        <>
            <Container>
                <Row className="row">
                    <Col md={4} className="colGasto">
                        <div>
                            <Button variant="primary">NUEVO GASTO</Button> {' '}
                        </div>
                    </Col>

                    <Col md={8} className="colEnviar mb-3">
                        <div>
                            <Button className="ms-2" variant="primary">GUARDAR</Button> {' '}
                            <Button className="ms-2"  onClick={() => cambiarEstadoM(!estadoM)} variant="primary"> CERRAR Y ENVIAR</Button> {' '}
                            <Button className="ms-2"  variant="primary">EXPORTAR EXCEL</Button> {' '}
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Table>
                    <thead>
                        <tr>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map(dato => (
                            <tr key={dato.id}>
                                <td>{dato.nombre}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.total}</td>
                                <td>{dato.nombre}</td>
                                <td></td>
                            </tr>    
                        ))}
                    </tbody>
                </Table>

            </Container>
            <Modal estado={estadoM}
                cambiarEstado={cambiarEstadoM}
                msg="Saldo Positivo"
                saldoPositivo={true}
                pagarButtons={true}></Modal>
        </>
    );

    function mostrarDatos() {

    }
}

export default Tabla;