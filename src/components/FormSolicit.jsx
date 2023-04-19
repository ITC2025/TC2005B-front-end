import FormInputIcon from './FormInputIcon';
import AddInputButton from './AddInputButton';
import AddedInput from './AddedInput';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";
import '../styles/FormSolicit.css';

function FormSolicit(props) {
    const [FechaInicio, setFechaInicio] = useState('');
    const [FechaTermino, setFechaTermino] = useState('');
    const [Destino, setDestino] = useState('');
    const [Proyecto, setProyecto] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        props.showModal(FechaInicio, FechaTermino, Destino, Proyecto);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Container id="FormSolicitComponent">
                    <Row id="SolicitFormRow">
                        <Col sm={10} md={5}>
                            <FormInputIcon inputControlID="FechaInicio" inputNombre="Fecha Inicio" inputPlaceHolder=""
                                inputType="date" value={FechaInicio} onChange={(event) => setFechaInicio(event.target.value)} />
                        </Col>
                        <Col sm={10} md={5}>
                            <FormInputIcon inputControlID="FechaTermino" inputNombre="Fecha Termino" inputPlaceHolder=""
                                inputType="date" value={FechaTermino} onChange={(event) => setFechaTermino(event.target.value)} />
                        </Col>
                    </Row>
                    <Row id="SolicitFormRow">
                        <Col sm={10} md={5}>
                            <FormInputIcon inputControlID="Destino" inputNombre="Destino" inputPlaceHolder=""
                                type="text" value={Destino} onChange={(event) => setDestino(event.target.value)} />
                        </Col>
                        <Col sm={10} md={5}>
                            <FormInputIcon inputControlID="Proyecto" inputNombre="Proyecto" inputPlaceHolder=""
                                type="text" value={Proyecto} onChange={(event) => setProyecto(event.target.value)} />
                        </Col>
                    </Row>
                    <Row id="SolicitFormRow">
                        <Col sm={10} md={10}>
                            <AddInputButton InputComponent={AddedInput} />
                        </Col>
                    </Row>
                </Container>
            </Form>
        </>
    );
}

export default FormSolicit;