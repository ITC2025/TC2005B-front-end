import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import NavbarSC from '../components/NavBar';
import FormInputIcon from '../components/FormInputIcon';
import AddInputButton from '../components/AddInputButton';
import AddedInput from '../components/AddedInput';
import RequestModal from '../components/RequestModal';
import '../styles/FormSolicit.css';
import '../styles/SendSaveCost.css';
import '../styles/SolicitarViaticos.css';

function SolicitarViaticos() {
    const [formData, setFormData] = useState({ fechaInicio: '', fechaTermino: '', destino: '', proyecto: '' });
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    return (
        <>
            <NavbarSC />
            <h1 id="HeaderTitle">Solicitar viaticos</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <div id="FormSolicitBody">
                    <Container id="FormSolicitComponent">
                        <Row id="SolicitFormRow">
                            <Col sm={10} md={5}>
                                <FormInputIcon 
                                    inputControlID="fechaInicio" 
                                    inputLabel="Fecha Inicio" 
                                    inputName="fechaInicio"
                                    inputType="date" 
                                    value={formData.fechaInicio} 
                                    onChange={handleInputChange} 
                                />
                            </Col>
                            <Col sm={10} md={5}>
                                <FormInputIcon 
                                    inputControlID="fechaTermino" 
                                    inputLabel="Fecha Termino" 
                                    inputName="fechaTermino"
                                    inputType="date" 
                                    value={formData.fechaTermino} 
                                    onChange={handleInputChange} 
                                />
                            </Col>
                        </Row>
                        <Row id="SolicitFormRow">
                            <Col sm={10} md={5}>
                                <FormInputIcon 
                                    inputControlID="destino" 
                                    inputLabel="Destino" 
                                    inputName="destino"
                                    inputType="text" 
                                    value={formData.destino} 
                                    onChange={handleInputChange} 
                                />
                            </Col>
                            <Col sm={10} md={5}>
                                <FormInputIcon 
                                    inputControlID="proyecto" 
                                    inputLabel="Proyecto" 
                                    inputName="proyecto"
                                    inputType="text" 
                                    value={formData.proyecto} 
                                    onChange={handleInputChange} 
                                />
                            </Col>
                        </Row>
                        <Row id="SolicitFormRow" className='mx-1'>
                            <Col sm={10} md={10}>
                                <AddInputButton InputComponent={AddedInput} />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div id="Footer">
                    <hr />
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>
                                <p className="mt-0" id="TotalExpenses">
                                    TOTAL DE LOS GASTOS (MXN):
                                </p>

                            </Col>
                            <Col id="SaveSendColumns" sm={12} md={6}>
                                <Button id="SendSaveButtons" variant="primary">
                                    GUARDAR CAMBIOS
                                </Button>
                                <Button id="SendSaveButtons" variant="primary" type="submit">
                                    GUARDAR Y ENVIAR
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Form>
            <RequestModal
                showModal={showModal}
                formData={formData}
                handleClose={() => setShowModal(false)}
            />
        </>
    );
}

export default SolicitarViaticos;