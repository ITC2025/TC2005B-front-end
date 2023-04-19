import FormInputIcon from './FormInputIcon';
import AddInputButton from './AddInputButton';
import AddedInput from './AddedInput';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/FormSolicit.css';

function FormSolicit() {

    return (
        <>
            <Container id="FormSolicitComponent">
                <Row id="SolicitFormRow">
                    <Col sm={10} md={5}>
                        <FormInputIcon inputControlID="FechaInicio" inputNombre="Fecha Inicio" inputPlaceHolder="" inputType="date"  />
                    </Col>
                    <Col sm={10} md={5}>
                        <FormInputIcon inputControlID="FechaTermino" inputNombre="Fecha Termino" inputPlaceHolder="" inputType="date" />
                    </Col>
                </Row>
                <Row id="SolicitFormRow">
                    <Col sm={10} md={5}>
                        <FormInputIcon inputControlID="Destino" inputNombre="Destino" inputPlaceHolder="" type="text" />
                    </Col>
                    <Col sm={10} md={5}>
                        <FormInputIcon inputControlID="Proyecto" inputNombre="Proyecto" inputPlaceHolder="" type="text" />
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