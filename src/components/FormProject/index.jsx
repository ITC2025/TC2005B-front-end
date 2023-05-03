import { React, useState, useEffect } from "react";
import { Col, Row, Button, Container, Form, InputGroup } from "react-bootstrap";
import {
  MdCalendarMonth,
  MdLocationPin,
  MdExpandMore,
  MdOutlineFileUpload,
} from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import "../../styles/formProject.css";
import { postProject } from "../../utils/PostProject";
import Modal from "../modal/index"

export default function FormProject({ PmData }) {

  //Hooks
  const [formData, setFormData] = useState({
    nombre: "",
    codigoProyecto: "",
    descripcion: "",
  });

  const postToDB = () => {
    postProject(formData.nombre, formData.codigoProyecto, formData.descripcion)
  }


  const handleForm = (event) => {
    postToDB();
  }

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

    // hooks de modales
    const [modalProyectoCreado, modalCambiarProyectoCreado] = useState(false);
    const [modalError, modalCambiarError] = useState(false);

  return (
    <>
      <Container className="d-flex justify-content-start">
        <h3>Nuevo Proyecto</h3>
      </Container>
      <Container className="justify-content-center">
        <hr />
        <Form onSubmit={handleForm}>
          <Form.Group className="m-3" controlId="formBasicUp">
            <Row>
              <Col>
                <Form.Label className="text-center">Nombre</Form.Label>

                <InputGroup className="mb-3">
                  <Form.Control name="nombre" value={formData.nombre} type="text" onChange={handleInputChange} required />
                </InputGroup>
              </Col>
              <Col>
                <Form.Label className="text-left">Código</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control name="codigoProyecto" value={formData.codigoProyecto} type="text" onChange={handleInputChange} required />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="m-3" controlId="formBasicDown" id="group2">
            <Row>
              <Col>
                <Form.Label>Descripción</Form.Label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea2"
                  rows="6"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </Col>
            </Row>
          </Form.Group>
          <Container className="d-flex justify-content-end">
            <Button type="submit" onClick={() => modalCambiarEstado3(!modalEstado3)} variant="primary"> Crear Proyecto </Button>
          </Container>
        </Form>
      </Container>
      <Container className="fixed-bottom">
        <hr />
      </Container>

      {/* Modales */}
      < Modal estado={modalProyectoCreado}
          cambiarEstado={modalCambiarProyectoCreado}
          msg={'PROYECTO CREADO'}
          oneButton={true}
          succesIcon={true}>
      </Modal>

      < Modal estado={modalError}
          cambiarEstado={modalCambiarError}
          msg={'OCURRIÓ UN ERROR'}
          oneButton={true}
          excalmartionIcon={true}>
      </Modal>

    </>
  );
}
