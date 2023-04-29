import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import NavbarSC from "../../components/NavBar";
import FormInputIcon from "../../components/FormInputIcon";
import AddInputButton from "../../components/AddInputButton";
import RequestModal from "../../components/RequestModal";
import "../styles/SolicitarViaticos.css";
import { postEstimatedExpenses } from "../../util/PostExpenses";

function SolicitarViaticos() {
  const [formData, setFormData] = useState({
    fechaInicio: "",
    fechaTermino: "",
    destino: "",
    proyecto: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [dataFromAddInput, setDataFromAddInput] = useState([]);

  const handleDataFromAddInput = (gastos) => {
    setDataFromAddInput(gastos);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const postToDB = () => {
    for (let i = 0; i < dataFromAddInput.length; i++) {
      postEstimatedExpenses(
        dataFromAddInput[i].concepto,
        dataFromAddInput[i].monto
      );
    }
  };

  let totalGastos = 0;

  for (let i = 0; i < dataFromAddInput.length; i++) {
    totalGastos = totalGastos + parseInt(dataFromAddInput[i].monto);
    console.log(dataFromAddInput[i].monto);
  }

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
            <Row id="SolicitFormRow" className="mx-1">
              <Col sm={10} md={10}>
                <AddInputButton onAddInput={handleDataFromAddInput} />
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
                  TOTAL DE LOS GASTOS (MXN): {totalGastos}
                </p>
              </Col>
              <Col id="SaveSendColumns" sm={12} md={6}>
                <Button id="SendSaveButtons" variant="primary">
                  GUARDAR CAMBIOS
                </Button>
                <Button
                  id="SendSaveButtons"
                  variant="primary"
                  type="submit"
                  onClick={postToDB}
                >
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
        gastosValues={dataFromAddInput}
        totalGastos={totalGastos}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
}

export default SolicitarViaticos;
