import { Col, Image } from "react-bootstrap";
import '../../styles/colDireccion.css'

function ColDireccion() {
    return (
        <>
            <Col md="auto"> <Image className="imgInnovation" src="../../images/shaefferSolutions.png" /> </Col>
            <Col md={6} className="colDireccion mb-4">
                <div>SCHAEFER Sistemas International, S.A. de C.V.</div>
                <div>Lope de Vega 125, Piso 9 | Col. Polanco V Sección</div>
                <div>Delegación Miguel Hidalgo, C.P. 11560 | Cd. De México</div>
                <div>Mexico</div>
                <div>Teléfono: +52 55 2881-0100</div>
                <div>contacto.mx@ssi-schaefer.com</div>
            </Col>
        </>
    );
}

export default ColDireccion;
