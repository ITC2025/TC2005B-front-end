import FormInputIcon from './FormInputIcon';
import AddInputButton from './AddInputButton';
import AddedInput from './AddedInput';
import { Container, Row, Col } from 'react-bootstrap';
import { MdCalendarMonth, MdLocationPin, MdExpandMore } from "react-icons/md";
import '../syles/FormSolicit.css';

function FormSolicit() {
    const calendar = <MdCalendarMonth />
    const location = <MdLocationPin />
    const expand = <MdExpandMore />
    return (
        <>
            <Container id="FormSolicitComponent">
                <Row id="SolicitFormRow">
                    <Col sm={10} md={5}>
                        <FormInputIcon inputControlID="FechaInicio" inputNombre="Fecha Inicio" inputPlaceHolder="" inputType="date" inputIcon={calendar} />
                    </Col>
                    <Col sm={10} md={5}>
                        <FormInputIcon inputControlID="FechaTermino" inputNombre="Fecha Termino" inputPlaceHolder="" inputType="date" inputIcon={calendar} />
                    </Col>
                </Row>
                <Row id="SolicitFormRow">
                    <Col sm={10} md={5}>
                        <FormInputIcon inputControlID="Destino" inputNombre="Destino" inputPlaceHolder="" inputIcon={location} />
                    </Col>
                    <Col sm={10} md={5}>
                        <FormInputIcon inputControlID="Proyecto" inputNombre="Proyecto" inputPlaceHolder="" inputIcon={expand} />
                    </Col>
                </Row>
                <Row id="SolicitFormRow">
                    <Col sm={10} md={10}>
                        <AddInputButton InputComponent={AddedInput} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FormSolicit;