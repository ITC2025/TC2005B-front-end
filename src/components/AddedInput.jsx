import { Form, Row, Col, Button } from 'react-bootstrap';
import { MdDeleteOutline } from "react-icons/md";

function AddedInput() {
    const DeleteLine = <MdDeleteOutline />
    return (
        <>
            <Row id="SolicitFormRowNew">
                <Col sm={10} md={7}>
                    <Form.Control type="text" placeholder="Concepto de Gasto" />
                </Col>
                <Col sm={10} md={3} id="IconButton">
                    <Form.Control type="text" placeholder="Monto" />
                    <Button>MXN</Button>
                </Col>
                <Col sm={10} md={1} id="IconButton">
                    <Button>{DeleteLine}</Button>
                </Col>
            </Row>
        </>
    );
}

export default AddedInput;