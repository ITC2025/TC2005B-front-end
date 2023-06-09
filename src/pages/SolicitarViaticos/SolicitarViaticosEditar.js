import { Container, Row, Col, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormInputIcon from "../../components/SolicitarViaticos/FormInputIcon";
import "../../styles/SolicitarViaticos.css";
import { SolInd } from "../../apis/getApiData";
import { updateSolicitud } from "../../apis/gastosApiTabla";
import { postEstimatedExpenses, submitSV } from "../../utils/PostExpenses";


function SolicitarViaticosEditar() {
  const routeParams = useParams();
  const navigate = useNavigate();

  const pageRefresher = () => {
    window.location.reload(); // cambiar ruta
  };

  const [formData, setFormData] = useState({});

  const [showModal, setShowModal] = useState(false);
  const [dataFromAddInput, setDataFromAddInput] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [nombresProyectos, setNombresProyectos] = useState([]);
  const [selectedProyecto, setSelectedProyecto] = useState("");


  let idProyecto = 0;


  const getDatos = async () => {
    await SolInd(routeParams.id).then((formData)=>{
      setFormData({
        fechaInicio: formData[0].fechaInicio,
        fechaTermino: formData[0].fechaTermino,
        destino: formData[0].destino,
        ID_proyecto: formData[0].ID_proyecto,
        descripcion: formData[0].descripcion
      });
      console.log(formData)
    });
  }

  useEffect(() => {
    const getDatos = async () => {
      await SolInd(routeParams.id).then((formData)=>{
        console.log("hola")
        setFormData({
          fechaInicio: formData[0].fechaInicio,
          fechaTermino: formData[0].fechaTermino,
          destino: formData[0].destino,
          ID_proyecto: formData[0].ID_proyecto,
          descripcion: formData[0].descripcion
        });
        console.log(formData)
      });
    }

    getDatos();
  }, []);

  useEffect(() => {
    const nombres = proyectos.map((proyecto) => proyecto.codigoProyecto);
    setNombresProyectos(nombres);
  }, [proyectos]);


  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveAsDraft()
    navigate(-1)
  };

  const mostrarIDProyecto = () => {
    for (let i = 0; i < proyectos.length; i++) {
      if (proyectos[i].codigoProyecto === selectedProyecto) {
        idProyecto = proyectos[i].ID_proyecto;
      }
    }
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

  console.log(formData.fechaInicio);

  return (
    <>
      <h1 id="HeaderTitle">Modificar Solicitud Viatico</h1>
      <hr />
      <Form onSubmit={handleSubmit} method="PATCH">
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
                  inputValue={formData.fechaInicio}
                  onChange={handleInputChange}
                  required
                />
              </Col>
              <Col sm={12} md={5}>
                <FormInputIcon
                  className="formFechaTermino-input"
                  inputControlID="fechaTermino"
                  inputLabel="Fecha Termino"
                  inputName="fechaTermino"
                  inputType="date"
                  inputValue={formData.fechaTermino}
                  onChange={handleInputChange}
                  required
                />
              </Col>
            </Row>
            <Row id="SolicitFormRow">
              <Col sm={12} md={10}>
                <FormInputIcon
                  className="formDestino-input"
                  inputControlID="destino"
                  inputLabel="Destino"
                  inputName="destino"
                  inputType="text"
                  inputPlaceholder={formData.destino}
                  inputValue={formData.destino}
                  onChange={handleInputChange}
                  required
                />
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
                  inputValue={formData.descripcion || "no jala"}
                  onChange={handleInputChange}
                  required
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
                {/* <Button
                  id="SendSaveButtons"
                  variant="primary"
                  onClick={saveAsDraft}
                >
                  GUARDAR CAMBIOS
                </Button> */}
                <Button id="SendSaveButtons" variant="primary" type="submit">
                GUARDAR Y ENVIAR
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Form>
    </>
  );
}

export default SolicitarViaticosEditar;
