import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormInputIcon from "../../components/SolicitarViaticos/FormInputIcon";
import AddInputButton from "../../components/SolicitarViaticos/AddInputButton";
import RequestModal from "../../components/SolicitarViaticos/RequestModal";
import "../../styles/SolicitarViaticos.css";
import { SolInd } from "../../apis/getApiData";
import { updateSolicitud } from "../../apis/gastosApiTabla";
import { postEstimatedExpenses, submitSV } from "../../utils/PostExpenses";

function SolicitarViaticosEditar() {
  const routeParams = useParams();

  const pageRefresher = () => {
    window.location.reload(); // cambiar ruta
  };

  const [formData, setFormData] = useState({
    fechaInicio: "",
    fechaTermino: "",
    destino: "hermosillo",
    ID_proyecto: "",
    descripcion: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [dataFromAddInput, setDataFromAddInput] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [nombresProyectos, setNombresProyectos] = useState([]);
  const [selectedProyecto, setSelectedProyecto] = useState("");


  let idProyecto = 0;

  

  useEffect(() => {
    const solicitud =  SolInd(routeParams.id)

    SolInd(routeParams.id).then((formData)=>{
      setFormData({
        fechaInicio: formData[0].fechaInicio,
        fechaTermino: formData[0].fechaTermino,
        destino: formData[0].destino,
        ID_proyecto: formData[0].ID_proyecto,
        descripcion: formData[0].descripcion
      })
    });
    console.log(formData)
  }, []);

  useEffect(() => {
    const nombres = proyectos.map((proyecto) => proyecto.codigoProyecto);
    setNombresProyectos(nombres);
  }, [proyectos]);

  const handleProyectoChange = (event) => {
    setSelectedProyecto(event.target.value);
  };

  const handleDataFromAddInput = (gastos) => {
    setDataFromAddInput(gastos);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const mostrarIDProyecto = () => {
    for (let i = 0; i < proyectos.length; i++) {
      if (proyectos[i].codigoProyecto === selectedProyecto) {
        idProyecto = proyectos[i].ID_proyecto;
      }
    }
  };

  const postToDB = () => {
    mostrarIDProyecto();
    console.log(idProyecto);
    updateSolicitud(
      routeParams.id,
      3,
      2,
      formData.fechaInicio,
      formData.fechaTermino,
      formData.destino,
      formData.descripcion
    ).then((res) => {
      for (let i = 0; i < dataFromAddInput.length; i++) {
        postEstimatedExpenses(
          dataFromAddInput[i].concepto,
          dataFromAddInput[i].monto,
          res
        );
      }
    });
    pageRefresher();
  };

    const saveAsDraft = () => {
      mostrarIDProyecto();

      alert("Solicitud de Viatico guardado como borrador");
      updateSolicitud(
        routeParams.id,
        3,
        2,
        formData.fechaInicio,
        formData.fechaTermino,
        formData.destino,
        formData.descripcion
      ).then((res) => {
        for (let i = 0; i < dataFromAddInput.length; i++) {
          postEstimatedExpenses(
            dataFromAddInput[i].concepto,
            dataFromAddInput[i].monto,
            res
          );
        }
      });
      pageRefresher();
    };

  let totalGastos = 0;

  for (let i = 0; i < dataFromAddInput.length; i++) {
    totalGastos = totalGastos + parseInt(dataFromAddInput[i].monto);
  }

  if (dataFromAddInput.length === 0) {
    totalGastos = 0;
  }

  return (
    <>
      <h1 id="HeaderTitle">Modificar Solicitud Viatico</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <div id="FormSolicitBody">
          <Container id="FormSolicitComponent">
            <Row id="SolicitFormRow">
              <Col sm={12} md={5}>
                <FormInputIcon
                  className="formFechaInicio-input"
                  inputControlID="fechaInicio"
                  inputLabel="Fecha Inicio"
                  inputName="fechaInicio"
                  inputType="date"
                  value={formData.fechaInicio}
                  onChange={handleInputChange}
                />
              </Col>
              <Col sm={12} md={5}>
                <FormInputIcon
                  className="formFechaTermino-input"
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
              <Col sm={12} md={5}>
                <FormInputIcon
                  className="formDestino-input"
                  inputControlID="destino"
                  inputLabel="Destino"
                  inputName="destino"
                  inputType="text"
                  value={formData.destino}
                  onChange={handleInputChange}
                />
              </Col>
              <Col sm={12} md={5}>
                <div id="ProyectosDropdown">
                  <Form.Label id="FormInputLabel">Proyecto</Form.Label>
                  <Form.Select
                    value={selectedProyecto}
                    onChange={handleProyectoChange}
                  >
                    <option value="">Selecciona un proyecto</option>
                    {nombresProyectos.map((nombre, index) => (
                      <option key={index} value={nombre}>
                        {nombre}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </Col>
            </Row>
            <Row id="SolicitFormRow">
              <Col sm={12} md={10}>
                <FormInputIcon
                  className="formDescripcion-input"
                  inputControlID="descripcion"
                  inputLabel="Descripcion"
                  inputName="descripcion"
                  inputType="text"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row id="SolicitFormRow" className="mx-1">
              <Col sm={12} md={10}>
                <AddInputButton
                  className="form-button"
                  onAddInput={handleDataFromAddInput}
                />
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
                <Button
                  id="SendSaveButtons"
                  variant="primary"
                  onClick={saveAsDraft}
                >
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
        gastosValues={dataFromAddInput}
        totalGastos={totalGastos}
        proyecto={selectedProyecto}
        handleClose={() => setShowModal(false)}
        handleModal={postToDB}
      />
    </>
  );
}

export default SolicitarViaticosEditar;
